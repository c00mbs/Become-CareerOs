const API = (process.env.NEXT_PUBLIC_CAREEROS_API_URL || 'https://careeros-api-yadv.onrender.com').replace(/\/$/, '');
export type User = {id:number;name:string;email:string};
export type EventItem = {id:number;type:string;title:string;description:string|null;date:string};
export type Skill = {id:number;skill_name:string;proficiency:number};
export type Application = {id:number;company:string;job_title:string;status:string;applied_date:string|null};
export type Summary = {user:{id:number;name:string};counts:{applications:number;career_events:number;skills:number};career_dna:Record<string,number>};
export class ApiError extends Error { constructor(message:string, public status:number){super(message);this.name='ApiError';} }
export const token = {get:()=>typeof window==='undefined'?null:sessionStorage.getItem('careeros_token'),set:(v:string)=>{sessionStorage.setItem('careeros_token',v)},clear:()=>{sessionStorage.removeItem('careeros_token')}};
async function call<T>(path:string,init:RequestInit={},auth=true):Promise<T>{
 const headers=new Headers(init.headers); if(init.body && !(init.body instanceof FormData)) headers.set('Content-Type','application/json');
 const t=token.get(); if(auth&&t) headers.set('Authorization',`Bearer ${t}`);
 const r=await fetch(API+path,{...init,headers,cache:'no-store'});
 if(!r.ok){let m=`Request failed (${r.status})`;try{const j=await r.json();m=j.detail||m}catch{};throw new ApiError(m,r.status)}
 if(r.status===204)return undefined as T; return r.json() as Promise<T>;
}
export const register=(name:string,email:string,password:string)=>call<User>('/auth/register',{method:'POST',body:JSON.stringify({name,email,password})},false);
export async function login(email:string,password:string){const r=await call<{access_token:string;expires_in:number}>('/auth/login',{method:'POST',body:JSON.stringify({email,password})},false);token.set(r.access_token);return r;}
export const me=()=>call<User>('/me');
export const summary=()=>call<Summary>('/career-summary');
export const events=()=>call<EventItem[]>('/career-timeline');
export const skills=()=>call<Skill[]>('/skills');
export const addSkill=(skill_name:string,proficiency:number)=>call<Skill>('/skills',{method:'POST',body:JSON.stringify({skill_name,proficiency})});
export const applications=()=>call<Application[]>('/applications');
