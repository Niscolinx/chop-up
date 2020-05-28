import React from 'react'
import Aux from './hoc/HigherOrder'
import { Row, Col } from 'react-bootstrap'


const Cart = (props) => {

    return (



        <Aux>
            <div className="super_container">
                <header className="header">
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo"><a href="#">Sublime.</a></div>
                                        <nav className="main_nav">
                                            <ul>
                                                <li className="hassubs active">
                                                    <a href="index.html">Home</a>
                                                    <ul>
                                                        <li><a href="categories.html">Categories</a></li>
                                                        <li><a href="product.html">Product</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Check out</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs">
                                                    <a href="categories.html">Categories</a>
                                                    <ul>
                                                        <li><a href="categories.html">Category</a></li>
                                                        <li><a href="categories.html">Category</a></li>
                                                        <li><a href="categories.html">Category</a></li>
                                                        <li><a href="categories.html">Category</a></li>
                                                        <li><a href="categories.html">Category</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Offers</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                        <div className="header_extra ml-auto">
                                            <div className="shopping_cart">
                                                <a href="cart.html">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489 489" style={{ enableBackground: 'new 0 0 489 489' }} xmlSpace="preserve">
                                                        <g>
                                                            <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
													c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
													C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
													H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
													c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z" />
                                                        </g>
                                                    </svg>
                                                    <div>Cart <span>(0)</span></div>
                                                </a>
                                            </div>
                                            <div className="search">
                                                <div className="search_icon">
                                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 475.084 475.084" style={{ enableBackground: 'new 0 0 475.084 475.084' }} xmlSpace="preserve">
                                                        <g>
                                                            <path d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087
												c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826
												C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676
												c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083
												c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844
												c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849
												c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z
												 M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549
												c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546
												c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z
												" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search_panel trans_300">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                        <form action="#">
                                            <input type="text" className="search_input" placeholder="Search" required="required" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_social">
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </header>
                <div className="menu menu_mm trans_300">
                    <div className="menu_container menu_mm">
                        <div className="page_menu_content">
                            <div className="page_menu_search menu_mm">
                                <form action="#">
                                    <input type="search" required="required" className="page_menu_search_input menu_mm" placeholder="Search for products..." />
                                </form>
                            </div>
                            <ul className="page_menu_nav menu_mm">
                                <li className="page_menu_item has-children menu_mm">
                                    <a href="index.html">Home<i className="fa fa-angle-down" /></a>
                                    <ul className="page_menu_selection menu_mm">
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Categories<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="product.html">Product<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="cart.html">Cart<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="checkout.html">Checkout<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="contact.html">Contact<i className="fa fa-angle-down" /></a></li>
                                    </ul>
                                </li>
                                <li className="page_menu_item has-children menu_mm">
                                    <a href="categories.html">Categories<i className="fa fa-angle-down" /></a>
                                    <ul className="page_menu_selection menu_mm">
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down" /></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down" /></a></li>
                                    </ul>
                                </li>
                                <li className="page_menu_item menu_mm"><a href="index.html">Accessories<i className="fa fa-angle-down" /></a></li>
                                <li className="page_menu_item menu_mm"><a href="#">Offers<i className="fa fa-angle-down" /></a></li>
                                <li className="page_menu_item menu_mm"><a href="contact.html">Contact<i className="fa fa-angle-down" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu_close"><i className="fa fa-times" aria-hidden="true" /></div>
                    <div className="menu_social">
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="home">
                    <div className="home_container">
                        <div className="home_background" style={{ backgroundImage: 'url(images/cart.jpg)' }} />
                        <div className="home_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_content">
                                            <div className="breadcrumbs">
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="categories.html">Categories</a></li>
                                                    <li>Shopping Cart</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_info">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="cart_info_columns clearfix">
                                    <div className="cart_info_col cart_info_col_product">Product</div>
                                    <div className="cart_info_col cart_info_col_price">Price</div>
                                    <div className="cart_info_col cart_info_col_quantity">Quantity</div>
                                    <div className="cart_info_col cart_info_col_total">Total</div>
                                </div>
                            </div>
                        </div>
                        <div className="row cart_items_row">
                            <div className="col">
                                <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    <div className="cart_item_image">
                                        <div><img src="images/cart_1.jpg" alt /></div>
                                    </div>
                                    <div className="cart_item_name_container">
                                        <div className="cart_item_name"><a href="#">Smart Phone Deluxe Edition</a></div>
                                        <div className="cart_item_edit"><a href="#">Edit Product</a></div>
                                    </div>
                                </div>
                                <div className="cart_item_price">$790.90</div>
                                <div className="cart_item_quantity">
                                    <div className="product_quantity_container">
                                        <div className="product_quantity clearfix">
                                            <span>Qty</span>
                                            <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                                            <div className="quantity_buttons">
                                                <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fa fa-chevron-up" aria-hidden="true" /></div>
                                                <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fa fa-chevron-down" aria-hidden="true" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart_item_total">$790.90</div>
                            </div>
                        </div>
                    </div>
                    <div className="row row_cart_buttons">
                        <div className="col">
                            <div className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                <div className="button continue_shopping_button"><a href="#">Continue shopping</a></div>
                                <div className="cart_buttons_right ml-lg-auto">
                                    <div className="button clear_cart_button"><a href="#">Clear cart</a></div>
                                    <div className="button update_cart_button"><a href="#">Update cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row_extra">
                        <div className="col-lg-4">
                            <div className="delivery">
                                <div className="section_title">Shipping method</div>
                                <div className="section_subtitle">Select the one you want</div>
                                <div className="delivery_options">
                                    <label className="delivery_option clearfix">Next day delivery
                <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <span className="delivery_price">$4.99</span>
                                    </label>
                                    <label className="delivery_option clearfix">Standard delivery
                <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <span className="delivery_price">$1.99</span>
                                    </label>
                                    <label className="delivery_option clearfix">Personal pickup
                <input type="radio" defaultChecked="checked" name="radio" />
                                        <span className="checkmark" />
                                        <span className="delivery_price">Free</span>
                                    </label>
                                </div>
                            </div>
                            <div className="coupon">
                                <div className="section_title">Coupon code</div>
                                <div className="section_subtitle">Enter your coupon code</div>
                                <div className="coupon_form_container">
                                    <form action="#" id="coupon_form" className="coupon_form">
                                        <input type="text" className="coupon_input" required="required" />
                                        <button className="button coupon_button"><span>Apply</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-2">
                            <div className="cart_total">
                                <div className="section_title">Cart total</div>
                                <div className="section_subtitle">Final info</div>
                                <div className="cart_total_container">
                                    <ul>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_total_title">Subtotal</div>
                                            <div className="cart_total_value ml-auto">$790.90</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_total_title">Shipping</div>
                                            <div className="cart_total_value ml-auto">Free</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_total_title">Total</div>
                                            <div className="cart_total_value ml-auto">$790.90</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button checkout_button"><a href="#">Proceed to checkout</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer1_overlay">
                <footer className="footer1">
                    <div className="footer1_background" style={{ backgroundImage: 'url(images/footer1.jpg)' }} />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer1_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                    <div className="footer1_logo"><a href="#">Sublime.</a></div>
                                    <div className="copyright ml-auto mr-auto">
                                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </div>
                                    <div className="footer1_social ml-lg-auto">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </Aux>
    )
}


export default Cart;