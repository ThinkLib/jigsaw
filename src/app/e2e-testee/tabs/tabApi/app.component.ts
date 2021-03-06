import {
    Component, TemplateRef, Type, ViewChild,
    Renderer2, ViewContainerRef
} from '@angular/core';
import {JigsawTab} from "jigsaw/component/tabs/tab";
import {IDynamicInstantiatable} from "jigsaw/component/common";
import {TabContentDefine} from "./tabContent/tabContent";

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class DynamicTabDemoComponent {
    @ViewChild(JigsawTab) tabs: JigsawTab;

    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2) {
    }

    public removeTab(index) {
        this.tabs.removeTab(index);
    }

    public hideTab(index): void {
        this.tabs.hideTab(index);
    }

    public showTab(index): void {
        this.tabs.showTab(index);
    }

    public addTab(tabTitle: string | TemplateRef<any>, tabContent: TemplateRef<any> | Type<IDynamicInstantiatable>, initData?: Object) {
        this.tabs.addTab(tabTitle, tabContent, initData)
    }

    public addTabWidthTemplateTitle(tabTitle, tabContent) {
        this.addTab(tabTitle, tabContent, {
            userInfo: {
                username: 'Jerry',
                email: 'ddd@qq.com',
                phoneNumber: '1347559375',
                address: '南京市雨花区软件大道1号'
            }
        })
    }

    public addTabWidthStringTitle(tabContent) {
        this.addTab('template tab', tabContent, {
            userInfo: {
                username: 'Martin',
                email: 'fff@163.com',
                phoneNumber: '1733994499',
                address: '南京市雨花区花神大道6号'
            }
        })
    }

    public addComponentTab() {
        this.addTab('component tab', TabContentDefine, 'jigsaw')
    }
}
