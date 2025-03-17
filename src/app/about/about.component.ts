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
  itemsDesc = ['You can book your tickets easily through our website. Simply choose a movie, select the date and time, pick your seats, and proceed to checkout. You will receive a confirmation email with your booking details.', 'Yes! We offer special discounts for students and children. Simply present a valid student ID at the counter or apply the discount online when booking your ticket. Discounts may vary based on the movie and showtime.', 'We accept multiple payment methods, including credit/debit cards, PayPal, and mobile payments. You can also pay with cash at the cinema box office.', 'To cancel your reservation, please log into your account and go to the "My Bookings" section. There, you will find the option to cancel your ticket. Refund policies may apply depending on the cancellation timing. If you need assistance, feel free to contact our support team.']
  expandedIndex = 0;
  
}
