import { State, UIController, UIScene, UIView, UIRouteOutlet, Text } from '@tuval/forms';


export class LayoutController extends UIController {


    public LoadView(): UIView {
        return (
            UIScene(
                UIRouteOutlet().width('100%').height('100%')
            )
        )
    }
}