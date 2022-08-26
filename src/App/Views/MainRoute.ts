import { bindNavigate, bindState, UIRoute, UIRoutes, useEffect } from "@tuval/forms";
import { LayoutController } from "../Controllers/LayoutController";
import { TrackerDashboardController } from "../dashboard/Controllers/TrackerDashboardController";
import { ErrorItemDetailController } from "../errors/Controllers/ErrorItemDetailController";
import { TrackerErrorsPageController } from "../errors/Controllers/ErrorsPageController";
import { TenantDetailController } from "../tenants/Controllers/TenantDetailController";
import { UrlPageController } from '../urls/Controllers/UrlPageController';
import { UrlDetailController } from '../urls/Controllers/UrlDetailController';


export const MainRoute = () => {
    const [LoggedIn, setLoggedIn] = bindState(null)
    /*    UIRoutes(
           UIRoute('/', new TrackerDashboardController()),
           UIRoute('/tracker/dashboard', new TrackerDashboardController()),
           UIRoute(
               UIRoute('/tracker/errors/:error_item', new ErrorItemDetailController()),
           )('/tracker/errors', new TrackerErrorsPageController()),
           UIRoute(
               UIRoute('/tracker/tenants/:tenant', new TenantDetailController()),
           )('/tracker/tenants', new TenantsPageController()),

           UIRoute('recent', new TrackerRecentPageController()), */
    let navigate = bindNavigate();
    useEffect(() => {
        if (LoggedIn) {
            navigate("/app(tracker)/dashboard");
            return () => setLoggedIn(false)
        }
    }, [LoggedIn]);

    setLoggedIn(true);
    return UIRoutes(
        UIRoute(
            UIRoute('/app(tracker)/dashboard', TrackerDashboardController),
            UIRoute(
                UIRoute(':error_item', ErrorItemDetailController),
            )('errors', TrackerErrorsPageController),
            UIRoute(
                UIRoute(':tenant', TenantDetailController),
            )('tenants', TrackerErrorsPageController),
            UIRoute(
                UIRoute(':url_hash', UrlDetailController),
            )('urls', UrlPageController),

        )('/app(tracker)', LayoutController),
        UIRoute('*', TrackerDashboardController)
        // UIRoute('*', null).redirectTo('/app(tracker)/dashboard')
    )
}

