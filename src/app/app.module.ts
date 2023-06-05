import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { HinhanhComponent } from './components/hinhanh/hinhanh.component';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DonHangComponent } from './components/don-hang/don-hang.component';
import { KhachhangComponent } from './components/khachhang/khachhang.component';
import { SubjectComponent } from './services/subject/subject.component';
import { AboutComponent } from './components/about/about.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { ThongbaoComponent } from './components/thongbao/thongbao.component';
import { DanhmucComponent } from './components/danhmuc/danhmuc.component';
import { TaikhoanComponent } from './components/taikhoan/taikhoan.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProductComponent,
    HinhanhComponent,
    NotfoundComponent,
    ProductDetailComponent,
    DonHangComponent,
    KhachhangComponent,
    SubjectComponent,
    AboutComponent,
    DangnhapComponent,
    ThongbaoComponent,
    DanhmucComponent,
    TaikhoanComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
