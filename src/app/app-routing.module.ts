import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HinhanhComponent } from './components/hinhanh/hinhanh.component';
import { DonHangComponent } from './components/don-hang/don-hang.component';
import { KhachhangComponent } from './components/khachhang/khachhang.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { AboutComponent } from './components/about/about.component';
import { ThongbaoComponent } from './components/thongbao/thongbao.component';
import { DanhmucComponent } from './components/danhmuc/danhmuc.component';
import { TaikhoanComponent } from './components/taikhoan/taikhoan.component';


const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'product-detail', component:ProductDetailComponent},
  {path:'main', component: MainComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'hinhanh',component:HinhanhComponent},
  {path:'donhang',component:DonHangComponent},
  {path:'khachhang',component:KhachhangComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'about',component:AboutComponent},
  {path:'Thongbao',component:ThongbaoComponent},
  {path:'danhmuc',component:DanhmucComponent},
  {path:'taikhoan',component:TaikhoanComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
