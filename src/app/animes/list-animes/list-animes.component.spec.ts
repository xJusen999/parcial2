import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListAnimesComponent } from './list-animes.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListAnimesComponent', () => {
 let component: ListAnimesComponent;
 let fixture: ComponentFixture<ListAnimesComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
    
     declarations: [ ListAnimesComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ListAnimesComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
