import { cLeading, HStack, Icon, IconLibrary, Spacer, VStack, Text, ForEach, UIRouteLink } from "@tuval/forms";

export const DashboardTopErrorsTileBox = (title, icon, data: any[]) => (
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

            // header
            HStack({ alignment: cLeading })(
                Text('Message').padding('5px 0'),
                Spacer(),
                Text('Count').padding('5px 0')
            )
                .borderBottom('1px solid #eee')
                .borderTop('1px solid #eee')
                .fontSize(13)
                .fontWeight('700')
                .fontFamily('Roboto,sans-serif')
                .foregroundColor('#777'),

            // data
            ...ForEach(data)(item =>
                HStack({ alignment: cLeading })(
                    UIRouteLink('/app(tracker)/errors/' + item.hash)(
                        Text(item.error).padding('5px 0')
                        .foregroundColor({ default: '#2475ab', hover: '#174a6c' }).cursor('pointer')
                        .fontSize(14).lineHeight('1.42857143'),
                    ),
                    Spacer(),
                    Text(item.count).padding('5px 0')
                )
                    .borderBottom('1px solid #eee')
                    .borderTop('1px solid #eee')
                    .fontFamily('Roboto,sans-serif')
            )
        )
            .padding('15px 20px 10px 20px')
            .marginTop('20px')
            .shadow('0 4px 9px 0 rgb(0 0 0 / 15%)')
            .cornerRadius(8)
            .height()
    ).paddingLeft('15px').paddingRight('15px').width('50%').height()
)