import { UIController, UIScene, Text, VStack, cTopLeading, HStack, Icon, Spacer, UIRouteOutlet } from '@tuval/forms';



export class TrackerErrorsPageController extends UIController {
    protected BindRouterParams() {

    }

    public LoadView() {
        return (
            UIScene(
                UIRouteOutlet().width('100%').height('100%')
            )
        )
    }
}