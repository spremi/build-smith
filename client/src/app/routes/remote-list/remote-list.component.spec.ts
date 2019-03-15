//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteListComponent } from './remote-list.component';

describe('RemoteListComponent', () => {
  let component: RemoteListComponent;
  let fixture: ComponentFixture<RemoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
