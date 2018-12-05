import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';

export const fade = trigger('fade', [
    state('void',style({transform: "translateY(15px)",opacity:0})),
    state('fadeOut',style({transform: "translateY(15px)",opacity:0})),
    state('fadeIn',style({ transform: "translateY(0px)",opacity:1})),
    transition('* => fadeIn', [
      animate('435ms ease', keyframes([
        style({ transform: "translateY(15px)",opacity:0, offset:0}),
        style({ transform: "translateY(0px)",opacity:1, offset:1})
      ]))
    ]),
  ]);

  export const listAnimation = trigger('listAnimation', [
    state('void',style({transform: "translateY(15px)",opacity:0})),
    transition(':enter', [
      animate('635ms cubic-bezier(0.645, 0.045, 0.355, 1)', keyframes([
        style({ transform: "translateY(15px)",opacity:0, offset:0}),
        style({ transform: "translateY(0px)",opacity:1, offset:1})
      ]))
    ])
  ])

  export const accordion = trigger('accordion', [
    state('close',style({maxHeight: "0px", paddingBottom: "0px", opacity:0})),
    transition('open => close', [
      animate('235ms ease', keyframes([
        style({maxHeight: "400px", paddingBottom: "28px", offset:0, opacity:1}),
        style({maxHeight: "0px", paddingBottom: "0px", offset:1, opacity:0})
      ]))
    ]),
    transition('close => open', [
      animate('435ms ease', keyframes([
        style({maxHeight: "0px", paddingBottom: "0px", offset:0, opacity:0}),
        style({maxHeight: "400px", paddingBottom: "28px", offset:1, opacity:1})
      ]))
    ]),
  ]);

  export const staggered = trigger('staggered', [
    transition('* => *',[
      query('.stg', style({opacity:0}), {optional: true}),
      query('.stg', stagger('100ms', [
        animate('600ms cubic-bezier(0.455, 0.03, 0.515, 0.955)', keyframes([
          style({opacity:0, transform: 'translateY(15px)', offset: 0}),
          style({opacity:1, transform: 'translateY(0px)', offset: 1})
        ]))
      ]))
    ])

  ])