import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const appRouterAnimation = trigger('routerAnimation', [
  transition('subject-details => *', [
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)', position: 'fixed' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', position: 'fixed', top: '{{topPosition}}' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)'}))
      ], { optional: true })
    ])
  ]),
  transition('* => subject-details', [
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', position: 'fixed' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', position: 'fixed', top: '{{topPosition}}' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
      ], { optional: true })
    ])
  ]),
  transition('dashboard => *', [
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', position: 'fixed' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', position: 'fixed', top: '{{topPosition}}' }, ),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true })
    ])
  ]),
  transition('* => dashboard', [
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)', position: 'fixed' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', position: 'fixed', top: '{{topPosition}}' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)'}))
      ], { optional: true })
    ])
  ])
]);
