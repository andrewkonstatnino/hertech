
import {Resend} from 'resend';
export async function POST(req:Request){
 const resend=new Resend(process.env.RESEND_API_KEY);
 const body=await req.json();
 await resend.emails.send({
  from:'website@herculeantechnologies.com',
  to:'sales@herculeantechnologies.com',
  subject:'New Herculean Lead',
  html:`<pre>${JSON.stringify(body,null,2)}</pre>`
 });
 return Response.json({success:true});
}
