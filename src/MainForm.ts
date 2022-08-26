import { TForm } from '@tuval/forms';
import { AppController } from './App/Controllers/AppController';
const manifest = require('./manifest');

export class MainForm extends TForm {
    m_Toolbar: any;
    m_tbiLabel: any;
    public override InitComponents() {
        this.Width = 1320;
        this.Height = 900;

        this.ShowHeader = true;
        this.HeaderColor = 'rgb(208, 63, 64)';
        this.HeaderTitleColor = 'white';
        this.HeaderTitleFontSize = '20';
        //this.Text = 'Tracer';
        this.Icon = manifest.icon;

        const appController = new AppController();
        appController.Bind(this);
        this.Controls.Add(appController);

        this.DefaultUrl = '/app(tracker)/dashboard';
    }
}