
import { ConfigService } from './ConfigService';
import { HttpClient, is } from '@tuval/core';

export interface GetSessionInfoResponse {
    is_real_admin: boolean;
    is_tenant_admin: boolean;
}
export interface GetRealmInfoResponse {
    key: string;
    value: string;
}

const token = '2a871ae92d944e039bc98a87072d2171';

export class ErrorMonitorBrokerClient {
    public static async GetErrorItems(token: string): Promise<string> {
        return new Promise((resolve, reject) => {

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItems?token=' + token)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetTopErrors(): Promise<string> {
        return new Promise((resolve, reject) => {

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetTopErrors?token=' + token)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetHighestImpactErrors(): Promise<string> {
        return new Promise((resolve, reject) => {

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetHighestImpactErrors?token=' + token)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorItemsByHash(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemsByHash?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorItemTopUsers(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemTopUsers?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }
    public static async GetLastErrorItemByHash(hash: string): Promise<any> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetLastErrorItemByHash?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }
    public static async GetErrorItemTopBrowsers(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemTopBrowsers?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorItemTopLinks(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemTopLinks?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorItemTopTenants(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemTopTenants?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorItemTopApplications(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorItemTopApplications?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetErrorsLast7Days(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetErrorsLast7Days?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }


    public static async GetUrlItemsByHash(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlItemsByHash?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetLastUrlItemByHash(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetLastUrlItemByHash?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetUrlItemTopUsers(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlItemTopUsers?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetUrlItemTopBrowsers(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlItemTopBrowsers?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetUrlItemTopErrors(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlItemTopErrors?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetUrlItemTopTenants(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlItemTopTenants?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

    public static async GetUrlsLast7Days(hash: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            const form = new FormData();
            form.append('hash', hash);

            HttpClient.Post(ConfigService.GetErrorMonitorBrokerUrl() + '/GetUrlsLast7Days?token=' + token, form)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    /* console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers); */
                    reject(error.response.data?.detail)
                });
        });
    }

}