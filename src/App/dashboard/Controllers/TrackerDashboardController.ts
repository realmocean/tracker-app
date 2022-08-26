import { UIController, UIScene, Text, VStack, cTopLeading, HStack, Icon, Spacer, State, ZStack, PositionTypes, Spinner, ScrollView, cVertical } from '@tuval/forms';

import { DashboardTileBox } from '../Views/DashboardTileView';
import { TvChart, ChartView, AreaSerie, MyControlBody } from '@tuval/components-charts';
import { ErrorMonitorBrokerClient } from '../../../Services/ErrorMonitorBrokerClient';
import { DashboardTopErrorsTileBox } from '../Views/DashboardTopErrorsTileBox';
import { TitleText } from '../../Views/TitleText';
import { PortalMenu } from '../../Views/PortalMenu';
import { Views } from '../../Views/Views';

const StatisticInfo = (title) => (
    VStack(
        Text(title).fontWeight('700').fontSize(14).whiteSpace('nowrap').textTransform('uppercase'),
        Text('0').foregroundColor('#999').fontSize(27).lineHeight('.9')
            .marginTop('5px')
    ).width()
)



export class TrackerDashboardController extends UIController {
    @State()
    private errorItems: any[];

    @State()
    private highestImpactErrors: any[];

    @State()
    private topErrors: any[];


    protected BindRouterParams() {
        /*   ErrorMonitorBrokerClient.GetErrorItems('41551e40faca4be6a76bc3895e12da1d').then(data => {
              this.errorItems = data as any;
              console.log(this.errorItems)
          }) */

        Promise.all([
            ErrorMonitorBrokerClient.GetTopErrors(),
            ErrorMonitorBrokerClient.GetHighestImpactErrors()
        ]).then(result => {
            this.topErrors = result[0] as any;
            this.highestImpactErrors = result[1] as any;
        })
    }

    public LoadView() {
        return (
            Views.PageView(0,
                VStack({ alignment: cTopLeading })(
                    HStack(
                        HStack({ alignment: cTopLeading, spacing: 10 })(
                            Icon('\\d2db').size(30),
                            TitleText('Dashboard')
                        ).height().marginTop('8px').paddingBottom('9px'),
                        Spacer(),
                        HStack({ spacing: 30 })(
                            StatisticInfo('NOTIFICATIONS'),
                            StatisticInfo('PAGE VIEWS'),
                            StatisticInfo('Errors'),
                            StatisticInfo('Users Impected'),
                            StatisticInfo('Sampling'),
                        ).width()


                    ).height().borderBottom('2px solid #ccc')
                        .padding('8px 20px'),
                    VStack(
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
                        VStack({ spacing: 10 })(
                            Text('Errors per Page View').fontSize(18).lineHeight('20px').fontWeight('600').foregroundColor('#333'),
                            Text('140.98%').fontSize(36).lineHeight('38px').fontWeight('700').foregroundColor('#b40404').fontFamily('Ubuntu,sans-serif'),
                        ).padding(10).left('50px').width().height().position(PositionTypes.Absolute).top('35px')
                    ).padding(20).height(),

                    this.topErrors == null ? HStack(Spinner()) :
                        HStack({ alignment: cTopLeading })(
                            DashboardTileBox('Highest Impact', '\\d233', this.highestImpactErrors),
                            DashboardTopErrorsTileBox('Top Errors', '\\d21e', this.topErrors),
                            DashboardTileBox('New Messages', '\\d234', this.errorItems)
                        ).height().wrap('wrap')
                )
            )
        )
    }
}