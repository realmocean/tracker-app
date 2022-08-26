import { int } from '@tuval/core';
import { cLeading, cTopLeading, cVertical, HStack, Icon, ScrollView, Text, UIRouteLink, UIScene, UIView, VStack } from '@tuval/forms';
import { PortalMenu } from './PortalMenu';

export namespace Views {

    export const TagValue = (value: string) => (
        Text(value)
            .background('#f9f9f9')
            .cornerRadius(4)
            .minWidth('50px')
            .padding('2px 9px')
            .fontSize(14)
            .fontFamily('Roboto,sans-serif')
            .whiteSpace('nowrap')
    )

    export const TagName = (value: string) => (
        Text(value)
            .background('#eee')
            .padding('2px 7px')
            .fontSize(13)
    )

    export const ShadowBlock = (...views: UIView[]) => (
        VStack({ alignment: cTopLeading })(
            VStack({ alignment: cTopLeading })(
                ...views
            )
                .padding('15px 20px 10px 20px')
                .marginTop('20px')
                .shadow('0 4px 9px 0 rgb(0 0 0 / 15%)')
                .cornerRadius(8)
        ).paddingLeft('15px').paddingRight('15px').width('33%')
    )
    export const ShadowBlockWithTitle = (icon: string, title: string, ...views: UIView[]) => (
        ShadowBlock(
            HStack({ alignment: cTopLeading, spacing: 5 })(
                Icon(icon).size(26).marginTop('5px'),
                Text(title)
                    .marginTop('5px')
                    .fontFamily('Ubuntu,sans-serif')
                    .fontSize(26)
                    .fontWeight('700')
                    .lineHeight('1.1')
            ).marginBottom('10px').height(),
            ...views

        )
    )

    export const Link = (label: string, link: string, state?: any) => (
        VStack({ alignment: cLeading })(
            UIRouteLink(link, state)(
                Text(label).padding('5px 0')
                    .foregroundColor({ default: '#2475ab', hover: '#174a6c' }).cursor('pointer')
                    .fontSize(14).lineHeight('1.42857143')
            ),
        ).height()
    )

    export const PageView = (selectedMenuIndex: int, content: UIView) => (
        HStack({ alignment: cTopLeading })(
            PortalMenu(selectedMenuIndex),
            ScrollView({ axes: cVertical })(
                content
            )

        )
    )
}