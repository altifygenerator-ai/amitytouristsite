/* eslint-disable @typescript-eslint/no-require-imports */
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const ts=require("typescript");
const filename=fs.existsSync("lib/nstp-business-sync.ts")?"lib/nstp-business-sync.ts":"src/lib/nstp-business-sync.ts";
const code=ts.transpileModule(fs.readFileSync(filename,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const mod={exports:{}};
new Function("require","module","exports",code)(require,mod,mod.exports);
const sync=mod.exports;
const city=process.env.NSTP_TEST_CITY || "Glenwood";
const site=process.env.NSTP_TEST_SITE || "glenwoodarkansas.org";
test("merges only approved fields, preserving paid placement and local images",async()=>{
 const prev=global.fetch;
 global.fetch=async()=>({ok:true,json:async()=>({businesses:[
 {name:"Caddo Cafe",source_key:"caddo-cafe",source_site:site,approved_overrides:{phone:"870-000-0000",description:"Approved and up to date",featured:true}},
 {name:"Different City",source_key:"different-city",source_site:"wrong-city.org",approved_overrides:{description:"Wrong city"}}
 ]})});
 try {
  const approved=await sync.approvedCityListings(city);
  assert.equal(approved.length,1);
  const original=[{name:"Caddo Cafe",description:"Original",phone:"",image:"/local.jpg",featured:false,website:"https://example.org"}];
  const updated=sync.mergeApprovedListings(original,approved);
  assert.equal(updated[0].description,"Approved and up to date");
  assert.equal(updated[0].phone,"870-000-0000");
  assert.equal(updated[0].image,"/local.jpg");
  assert.equal(updated[0].featured,false);
 } finally{global.fetch=prev;}
});
test("unavailable public feed preserves all original local listings",async()=>{
 const before=global.fetch;
 global.fetch=async()=>{throw Error("offline")};
 try {
   const list=await sync.approvedCityListings(city);
   assert.deepEqual(list,[]);
   const original=[{name:"Cafe",description:"Keep this"}];
   assert.strictEqual(sync.mergeApprovedListings(original,list),original);
 }finally{global.fetch=before;}
});
