import { cLeading, HStack, Icon, IconLibrary, Spacer, VStack, Text, ForEach, UITable, TableColumn, UIAppearance, cTrailing, UIRouteLink } from "@tuval/forms";

export const DashboardTileBox = (title, icon, data: any[]) => (
    VStack(
        VStack(
            HStack({ alignment: cLeading, spacing: 5 })(
                Icon(icon).size(26),
                Text(title)
                    .marginTop('5px')
                    .fontFamily('Ubuntu,sans-serif')
                    .fontSize(26)
                    .fontWeight('700')
                    .lineHeight('1.1')
            ).marginBottom('10px'),
            UITable(
                TableColumn(Text('Message'))(row =>
                    HStack({ alignment: cLeading, spacing: 5 })(
                        VStack({ alignment: cLeading })(
                            UIRouteLink('/app(tracker)/errors/' + row.hash)(
                                Text(row.error).padding('5px 0')
                                    .foregroundColor({ default: '#2475ab', hover: '#174a6c' }).cursor('pointer')
                                    .fontSize(14).lineHeight('1.42857143')
                            ),
                        )
                    ).padding(8)
                ).padding('5px 0').paddingLeft('15px'),
                TableColumn(HStack({ alignment: cTrailing })(Text('Tenant Affected').whiteSpace('nowrap')).paddingRight('10px'))(row =>
                    HStack({ alignment: cTrailing })(
                        Text(row.tenant_count).fontSize(15).fontWeight('700')
                    ).paddingRight('10px')
                ).padding('5px 0'),
                TableColumn(HStack({ alignment: cTrailing })(Text('User Affected').whiteSpace('nowrap')))(row =>
                    HStack({ alignment: cTrailing })(
                        Text(row.user_count).fontSize(15).fontWeight('700')
                    )
                ).padding('5px 0'),

            ).value(data)
                .height()
                .headerAppearance(UIAppearance()
                    .fontSize(13)
                    .fontWeight('700')
                    .fontFamily('Roboto,sans-serif')
                    .foregroundColor('#777')
                    .cornerRadius(3))
                .rowAppearance(UIAppearance()
                    .cornerRadius(3)
                    .borderTop('1px solid #f1f1f1')
                    .padding('1rem')),

        )
            .padding('15px 20px 10px 20px')
            .marginTop('20px')
            .shadow('0 4px 9px 0 rgb(0 0 0 / 15%)')
            .cornerRadius(8)
            .height()
    ).paddingLeft('15px').paddingRight('15px').width('50%').height()
)