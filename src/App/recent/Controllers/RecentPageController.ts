import { UIController, UIScene, Text, VStack, cTopLeading, HStack, Icon, Spacer } from '@tuval/forms';



export class TrackerRecentPageController extends UIController {
    protected BindRouterParams() {

    }

    public LoadView() {
        return (
            UIScene(
              Text('recents')
            )
        )
    }
}