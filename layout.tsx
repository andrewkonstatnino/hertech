
import './globals.css';
export const metadata={
title:'Herculean Technologies',
description:'Data Center & Cloud Advisory',
metadataBase:new URL('https://herculeantechnologies.com')
};
export default function RootLayout({children}:{children:React.ReactNode}){
return <html><body>{children}</body></html>
}
