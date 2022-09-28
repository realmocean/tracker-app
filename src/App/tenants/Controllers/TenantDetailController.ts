import { UIController, UIScene, Text, VStack, cTopLeading, HStack, Icon, Spacer, State, cLeading, ForEach } from '@tuval/forms';
import { TitleText } from '../../Views/TitleText';
import { ErrorMonitorBrokerClient } from '../../../Services/ErrorMonitorBrokerClient';
import { Views } from '../../Views/Views';
import { AreaSerie, ChartView } from '@realmocean/charts';



export class TenantDetailController extends UIController {

    @State()
    private tenant: string;

    @State()
    private error_items: any[];

    @State()
    private firstItem: any;

    @State()
    private topTenants: any[];

    @State()
    private topUsers: any[];

    @State()
    private topBrowsers: any[];

    @State()
    private topLinks: any[];

    private clear() {
        this.error_items = null;
        this.firstItem = null;
    }
    protected BindRouterParams({ tenant }) {
        this.clear();
        this.tenant = tenant;
        Promise.all([
            /* ErrorMonitorBrokerClient.GetErrorItemsByHash(error_item),
            ErrorMonitorBrokerClient.GetErrorItemTopUsers(error_item),
            ErrorMonitorBrokerClient.GetErrorItemTopBrowsers(error_item),
            ErrorMonitorBrokerClient.GetErrorItemTopLinks(error_item),
            ErrorMonitorBrokerClient.GetErrorItemTopTenants(error_item) */
        ]).then(results => {
            /* this.error_items = results[0];
            console.log(this.error_items);
            if (this.error_items.length > 0) {
                this.firstItem = this.error_items[0];
            }

            this.topUsers = results[1];
            this.topBrowsers = results[2];
            this.topLinks = results[3];
            this.topTenants = results[4]; */
        })
    }

    public LoadView() {
        return (
            Views.PageView(5,
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack({ spacing: 10 })(
                            Icon('\\d33a').size(27),
                            TitleText('Tenants').whiteSpace('nowrap'),
                            Icon('\\d231').size(18).foregroundColor('#aaa')
                        ).width().height(),
                        VStack({ alignment: cLeading, spacing: 10 })(
                            Text(this.tenant).fontSize(24).fontFamily('Ubuntu,sans-serif'),
                            HStack({ alignment: cLeading, spacing: 20 })(
                                HStack({ spacing: 5 })(
                                    Views.TagName('Last Seen'),
                                    Views.TagValue(this.firstItem?.time_human)
                                ).height().border('1px solid #eee').cornerRadius(4).width(),
                                HStack({ spacing: 5 })(
                                    Views.TagName('Entry'),
                                    Views.TagValue(this.firstItem?.entry)
                                ).height().border('1px solid #eee').cornerRadius(4).width(),
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
                        Views.ShadowBlockWithTitle('\\d21e', 'Top Errors',
                            ...ForEach(this.topTenants)(item =>
                                HStack(
                                    Views.Link(item.tenant, '/app(tracker)/tenants/' + item.tenant),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height()
                            )
                        ),
                        Views.ShadowBlockWithTitle('\\d235', 'Top Users',
                            ...ForEach(this.topUsers)(item =>
                                HStack(
                                    Views.Link(item.user, '/tracker/users/' + item.user),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height()
                            )
                        ),
                        Views.ShadowBlockWithTitle('\\d220', 'Top Browsers',
                            ...ForEach(this.topBrowsers)(item =>
                                HStack(
                                    Views.Link(item.browser, '/tracker/users/' + item.user),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height()
                            )
                        ),
                        //Views.ShadowBlockWithTitle('\\d21f', 'Top Urls')
                    ).height().wrap('wrap'),
                    HStack({ alignment: cTopLeading })(
                        Views.ShadowBlockWithTitle('\\d21f', 'Top Urls',
                            ...ForEach(this.topLinks)(item =>
                                HStack(
                                    Views.Link(item.url, '/tracker/urls/' + item.url),
                                    Spacer(),
                                    Text(item.count).whiteSpace('nowrap')
                                ).height()
                            )
                        ),
                    ).height().wrap('wrap'),

                )
            )
        )
    }
}