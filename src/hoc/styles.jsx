import styled, { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

@font-face {
	font-family: 'proxima_nova_rgregular';
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.svg#proxima_nova_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'proxima_nova_rgbold';
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.svg#proxima_nova_rgbold') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'adelle_rgregular';
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.svg#adelle_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
	font-family: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;
}
.btn{
    padding: 20px 40px;
    background-color:transparent;
    font-family: 'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
    cursor:pointer;
    border-radius:30px;
    text-transform:uppercase;
    border-width:2px;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: .1em;
    border-color: #272727;
	transition: all .5s;
}
.btn:hover{
    background-color: #272727;
    color:#fff;
}
.btn:focus{
    outline:none;
}
.text-center{
    text-align:center;
}
.upper{
	text-transform:uppercase;
}
.bold{
	font-weight:bold;
}
.underline{
	text-decoration:underline;
}
p{
	line-height:2.5rem;
}
`;
