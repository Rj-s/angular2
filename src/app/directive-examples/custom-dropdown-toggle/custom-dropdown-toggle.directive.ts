import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomDropdownToggle]'
})
export class CustomDropdownToggleDirective {

  //private isOpen = false;
  // 'open' class is bootstrap class which is assigned when user click on dropdown button.
  // But we have not added bootstrap js code which opens drop down here. So manually we are opening the dropdown.
  // @HostBinding('class.open') get opened() {
  //   return this.isOpen;
  // }

  @HostBinding('class.open') isOpen : boolean;

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    setTimeout(() => {
      this.isOpen = false;
    }, 1000);
  }

}
