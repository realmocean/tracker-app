import { UIController, UIScene, Text, VStack, cTopLeading, HStack, Icon, Spacer, State, cLeading, ForEach } from '@tuval/forms';
import { TitleText } from '../../Views/TitleText';
import { ErrorMonitorBrokerClient } from '../../../Services/ErrorMonitorBrokerClient';
import { Views } from '../../Views/Views';
import { AreaSerie, ChartView } from '@realmocean/charts';

export class UrlDetailController extends UIController {

    @State()
    private url: string;

    @State()
    private url_hash: string;

    @State()
    private url_items: any[];

    @State()
    private firstItem: any;

    @State()
    private topErrors: any[];

    @State()
    private topUsers: any[];

    @State()
    private topBrowsers: any[];

    @State()
    private topTenants: any[];

    @State()
    private chartData: any[];


    protected BindRouterParams({ url_hash, url }) {
        this.url = url;
        this.url_hash = url_hash;
        Promise.all([
            ErrorMonitorBrokerClient.GetLastUrlItemByHash(url_hash),
            ErrorMonitorBrokerClient.GetUrlItemTopUsers(url_hash),
            ErrorMonitorBrokerClient.GetUrlItemTopBrowsers(url_hash),
            ErrorMonitorBrokerClient.GetUrlItemTopErrors(url_hash),
            ErrorMonitorBrokerClient.GetUrlItemTopTenants(url_hash),
            ErrorMonitorBrokerClient.GetUrlsLast7Days(url_hash),
        ]).then(results => {
            this.firstItem = results[0];

            this.topUsers = results[1];
            this.topBrowsers = results[2];
            this.topErrors = results[3];
            this.topTenants = results[4];
            const dates = results[5];

            const result = [];

            let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            const dateOffset = (24 * 60 * 60 * 1000) * 1; //1 day
            const getWithZero = (value) => {
                if (value < 10) {
                    return `0${value}`
                } else {
                    return `${value}`
                }
            }
            for (let index = 0; index < 7; index++) {

                const current = new Date(today.getTime() - ((24 * 60 * 60 * 1000) * index));
                const key = `${current.getFullYear()}-${getWithZero(current.getMonth() + 1)}-${getWithZero(current.getDate())} 00:00:00`
                result.push({
                    x: new Date(current.getFullYear(), current.getMonth(), current.getDate()),
                    y: dates[key]
                });
            }

            this.chartData = result;
        })
    }

    public LoadView() {
        return (
            Views.PageView(3,
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack({ spacing: 10 })(
                            Icon('\\d21f').size(27),
                            TitleText('Urls').whiteSpace('nowrap'),
                            Icon('\\d231').size(18).foregroundColor('#aaa')
                        ).width().height(),
                        VStack({ alignment: cLeading, spacing: 10 })(
                            Text(this.url).fontSize(24).fontFamily('Ubuntu,sans-serif'),
                            HStack({ alignment: cLeading, spacing: 20 })(
                                HStack({ spacing: 5 })(
                                    Views.TagName('Last Seen'),
                                    Views.TagValue(this.firstItem?.time_human)
                                ).height().border('1px solid #eee').cornerRadius(4).width()
                            ).height(),
                        ).height().width()
                    ).height().padding(10),

                    // chart

                    ChartView()(
                        AreaSerie().xName('x').yName('y').border({ color: '#FBCD4E', width: 3 })
                            .marker({ visible: true, width: 10, height: 10, fill: '#FBB90A', border: { color: 'white' } })
                            .fill('#FBCD4E55')
                            .animation({
                                enable: false
                            })
                            .data(this.chartData)

                    )
                        .xAxis({
                            labelStyle: {
                                fontFamily: 'Ubuntu, sans-serif',
                                size: '14px'
                            },
                            valueType: 'DateTime',
                            labelFormat: 'MMM',
                            majorGridLines: {
                                width: 1,
                                color: '#EFEFEF'
                            },
                            intervalType: 'Months',
                            edgeLabelPlacement: 'Shift'
                        })
                        .yAxis({
                            labelStyle: {
                                fontFamily: 'Ubuntu, sans-serif',
                                size: '14px'
                            },
                            labelFormat: '{value}',
                            lineStyle: { width: 0 },
                            majorGridLines: {
                                width: 1,
                                color: '#EFEFEF'
                            },
                            majorTickLines: { width: 0 },
                            minorTickLines: { width: 0 }
                        })
                        .chartArea({
                            border: { width: 0 },
                            background: '#F6F6F6'
                        })
                        .backgroundColor('transparent').height(300),
                    // Boxes
                    HStack({ alignment: cTopLeading })(
                        Views.ShadowBlockWithTitle('\\d33a', 'Top Tenants',
                            ...ForEach(this.topTenants)(item =>
                                HStack(
                                    Views.Link(item.tenant, '/app(tracker)/tenants/' + item.tenant),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height().borderBottom('1px solid #eee')
                            )
                        ),
                        Views.ShadowBlockWithTitle('\\d235', 'Top Users',
                            ...ForEach(this.topUsers)(item =>
                                HStack(
                                    Views.Link(item.user, '/tracker/users/' + item.user),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height().borderBottom('1px solid #eee')
                            )
                        ),
                        Views.ShadowBlockWithTitle('\\d220', 'Top Browsers',
                            ...ForEach(this.topBrowsers)(item =>
                                HStack(
                                    Views.Link(item.browser, '/tracker/users/' + item.user),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height().borderBottom('1px solid #eee')
                            )
                        ),
                        //Views.ShadowBlockWithTitle('\\d21f', 'Top Urls')
                    ).height().wrap('wrap'),
                    HStack({ alignment: cTopLeading })(
                        Views.ShadowBlockWithTitle('\\d21f', 'Top Errors',
                            ...ForEach(this.topErrors)(item =>
                                HStack(
                                    Views.Link(item.message, '/app(tracker)/errors/' + item.error_hash),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height().borderBottom('1px solid #eee')
                            )
                        ),
                    ).height().wrap('wrap'),

                )
            )
        )
    }
}