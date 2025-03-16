import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-about',
  imports: [CdkAccordionModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  items = ['How to book tickets?', 'Are there any discounts for students/children?', 'What are the available payment methods?', 'How to cancel a reservation?'];
  itemsDesc = ['To cancel your reservation, please log into your account and go to the "My Bookings" section. There, you will find the option to cancel your ticket. Refund policies may apply depending on the cancellation timing. If you need assistance, feel free to contact our support team.', 'Morbi sodales enim justo. Donec nec faucibus ligula, ac aliquam purus. Aliquam dignissim, sem id eleifend mattis, libero orci laoreet orci, et faucibus dui ligula quis magna. Vestibulum a quam purus. Nam dapibus augue vitae efficitur posuere. Duis fringilla mauris ex, ac convallis tellus suscipit sit amet. Nulla facilisi.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices nisi velit, vel vulputate nisi tincidunt non. Mauris malesuada lacus eu diam convallis, sed sagittis eros luctus. Vivamus eros erat, rhoncus ac pharetra ac, volutpat sed nunc. Sed libero urna, porta sed ligula quis, luctus aliquam orci. Vivamus lacinia, odio eu tristique vestibulum, sapien mauris egestas urna, vel auctor justo arcu eu ipsum. Curabitur vestibulum eros ligula, non egestas arcu mollis quis. Curabitur posuere consectetur ex vel vulputate. Suspendisse vulputate gravida orci quis pellentesque. Quisque in ex luctus, sodales justo eu, bibendum ipsum. Donec vitae erat in tellus mattis vestibulum. Sed aliquam risus purus, vitae interdum diam pretium at. Ut tincidunt, arcu non lacinia luctus, dolor ligula condimentum dolor, vel ultricies quam libero ac tortor. Maecenas mollis eros et ipsum porta, non consequat justo fermentum.', 'Curabitur elit nisi, feugiat rhoncus laoreet sed, mattis eu lectus. Duis eleifend aliquet consequat. Quisque tincidunt nunc ut varius commodo. Vivamus ullamcorper, lorem quis pulvinar interdum, tellus dolor malesuada ipsum, porttitor mattis sem est quis odio. Nam dignissim dui vel purus lacinia viverra. Suspendisse potenti. Vestibulum aliquet, tellus in semper egestas, est nisi aliquet libero, dignissim eleifend elit odio vitae sapien.']
  expandedIndex = 0;
  
}
