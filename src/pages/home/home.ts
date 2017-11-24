import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SceneGraph } from '../../components/scenegraph/scenegraph';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }
  
}
