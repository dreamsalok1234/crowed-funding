import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

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
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Layout',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
    ]
  },
  {
    label: 'User',
    main: [
      {
        state: 'manage-user',
        name: 'Manage User',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'userlist',
            name: 'User-List'
          }
        ]
      },
    ]
  },
  {
    label: 'Role',
    main: [
      {
        state: 'manage-role',
        name: 'Manage Role',
        type: 'sub',
        icon: 'ti-tag',
        children: [
          {
            state: 'rolelist',
            name: 'Role List'
          }
        ]
      },
    ]
  },
  {
    label: 'Mortgage',
    main: [
      {
        state: 'manage-mortgage',
        name: 'Manage Mortgage',
        type: 'sub',
        icon: 'ti-bookmark-alt',
        children: [
          {
            state: 'mortgagelist',
            name: 'Mortgage List'
          },
          {
            state: 'addmortage',
            name: 'Add Mortgage'
          }
        ]
      },
    ]
  },
  {
    label: 'Property',
    main: [
      {
        state: 'manage-property',
        name: 'Manage property',
        type: 'sub',
        icon: 'ti-bar-chart-alt',
        children: [
          {
            state: 'categorylist',
            name: 'Category-List'
          },
          {
            state: 'addcategory',
            name: 'Add Category',
            title: 'Category'
          },          
          {
            state: 'conditionlist',
            name: 'Condtion List'
          },
          {
            state: 'addconditions',
            name: 'Add Conditions',
            title: 'Conditions'
          },
          {
            state: 'documentlist',
            name: 'Document List'
          },
          {
            state: 'filerequest',
            name: 'File Request'
          },
          {
            state: 'gallarylist',
            name: 'Gallary List'
          },
          {
            state: 'propertylist',
            name: 'Property List'
          },
          {
            state: 'propertysummarylist',
            name: 'Property Summary List'
          }
        ]
      },
    ]
  },
  {
    label: 'Investment',
    main: [
      {
        state: 'manage-investment',
        name: 'Manage Investment',
        type: 'sub',
        icon: 'ti-credit-card',
        children: [
          {
            state: 'investmentlist',
            name: 'Investment List'
          },
          {
            state: 'addinvestment',
            name: 'Add Investment'
          }
        ]
      },
    ]
  }, 
  {
    label: 'Transaction',
    main: [
      {
        state: 'manage-transaction',
        name: 'Manage Transaction',
        type: 'sub',
        icon: 'ti-credit-card',
        children: [
          {
            state: 'transactionlist',
            name: 'Transaction List'
          },
          {
            state: 'transactionhistory',
            name: 'Transaction History'
          }
        ]
      },
    ]
  },
  {
    label: 'Contact',
    main: [
      {
        state: 'manage-contact',
        name: 'Manage Contact',
        type: 'sub',
        icon: 'ti-mobile',
        children: [
          {
            state: 'contactlist',
            name: 'Contact List'
          }
        ]
      },
    ]
  },
  {
    label: 'Chart And Map',
    main: [
      {
        state: 'authentication',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          },
          {
            state: 'forgot',
            name: 'Forgot Password',
            target: true
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
