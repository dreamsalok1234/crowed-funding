import { Injectable } from '@angular/core';


export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  children?: ChildrenItems[];
}

export interface Menu {
 
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
  },
  {
    state: 'business',
    name: 'Business Model',
    type: 'link',
  },
  {
    state: 'about',
    name: 'About us',
    type: 'link',
  },
/*  {
    state: 'works',
    name: 'How It Works',
    type: 'link',
  },*/
  {
    state: 'contact',
    name: 'Contact Us',
    type: 'link',
  }
];

@Injectable()
export class RootMenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
