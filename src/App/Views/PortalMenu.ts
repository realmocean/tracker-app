import { Color, cTop, ForEach, Icon, UIRouteLink, VStack, HStack, Text, IconLibrary } from '@tuval/forms';

const titleColor = 'rgb(208, 63, 64)';
const menuColor = '#212932';
const selectedMenuBackColor = 'rgba(235,240,249,.2)';
const subMenuColor = '#52565b';
const menuBorderColor = '#e7b54a'
const menuHoverColor = '#eee'
const hoverTextColor = '#333'
const subMenuShadow = 'inset 24px 0 20px -20px #373b40';
const titleShadow = '0 1px 5px 1px rgb(0 0 0 / 30%)';


const menuModel = [
    {
        name: 'Dashboard',
        icon: IconLibrary.Dashboard1,
        link: '/app(tracker)/dashboard',
        subMenu: [
            /*   {
                  name: 'Test',
                  icon: IconLibrary.AccessibilityNew
              },
              {
                  name: 'Test',
                  icon: IconLibrary.AccessibilityNew
              },
              {
                  name: 'Test',
                  icon: IconLibrary.AccessibilityNew
              } */
        ]
    },
    {
        name: 'Errors',
        icon: IconLibrary.Error,
        link: '/app(tracker)/errors',
        /*  subMenu: [
            {
                name: 'Test',
                icon: IconLibrary.AddShoppingCart
            },
            {
                name: 'Test',
                icon: IconLibrary.Api
            },
            {
                name: 'Test',
                icon: IconLibrary.AccessibilityNew
            }
        ] */
    },
    {
        name: 'Recent',
        icon: '\\d224',
        link: '/app(tracker)/recent',
    },
    {
        name: 'Urls',
        icon: '\\d21f'
    },
    {
        name: 'Browsers',
        icon: '\\d220'
    },
    {
        name: 'Tenants',
        icon: '\\d33a',
        link: 'app(tracker)/tenants'
    },
    {
        name: 'Users',
        icon: '\\d235'
    },
    {
        name: 'Versions',
        icon: '\\d22b'
    },
    {
        name: 'Metadata',
        icon: '\\d278'
    },
    {
        name: 'Trends',
        icon: '\\d375'
    }
]

export const PortalMenu = (selectedIndex) => (
    HStack(
        VStack({ alignment: cTop })(
            ...ForEach(menuModel)((item, index) =>
                UIRouteLink(item.link ?? '')(
                    VStack({ spacing: 5 })(
                        Icon((item as any).icon).size(26),
                        Text(item.name).fontSize(12)
                    )
                        .height(70)
                        .foregroundColor({ default: Color.white, hover: '#333' })
                        .background({ default: index == selectedIndex ? selectedMenuBackColor : '', hover: menuHoverColor })
                        .borderBottom(index == selectedIndex ? 'solid 2px #e7b54a' : '')

                ).width('100%')
            )
        ).background(menuColor).width(75).minWidth('75px').cursor('pointer').shadow('inset 24px 0 20px -20px #00000044'),
        VStack({ alignment: cTop })(
            ...ForEach(menuModel[selectedIndex].subMenu)(item =>
                VStack({ spacing: 5 })(
                    Icon(item.icon).size(30),
                    Text(item.name)
                )
                    .height(80)
                    .foregroundColor({ default: Color.white, hover: '#333' })
                    .background({ hover: menuHoverColor })
                    .cursor('pointer')
            )
        )
            .foregroundColor('#eee')
            .background(subMenuColor)
            .width()
            .initial({ width: 0 }).animate({ width: 90 })
            .shadow('inset 24px 0 20px -20px #373b40')
            .visible(false/* Array.isArray(menuModel[selectedIndex].subMenu) */)
    ).width()
)