import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SceneGraph } from '../../components/scenegraph/scenegraph';
import { Customer, Service } from '../../services/dummy.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})
export class HomePage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  customers: Customer[];

  constructor(public navCtrl: NavController, service: Service) {
    this.customers = service.getCustomers();
  }

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }

}
