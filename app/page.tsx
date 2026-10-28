'use client';
import { useEffect, useRef, useState } from 'react';
import type { Map as MapLibreMap } from 'maplibre-gl';
export default function Home() {
 const ref=useRef<HTMLDivElement>(null); const map=useRef<MapLibreMap|null>(null); const [ready,setReady]=useState(false);
 useEffect(()=>{ let active=true; (async()=>{const maplibregl=(await import('maplibre-gl')).default; if(!active||!ref.current)return; const instance=new maplibregl.Map({container:ref.current,style:'https://demotiles.maplibre.org/style.json',center:[10,12],zoom:1.3,attributionControl:true});map.current=instance;instance.on('load',()=>setReady(true));})();return()=>{active=false;map.current?.remove();map.current=null;};},[]);
 return <main><header><strong>LES HÉRITIERS</strong><span>Pourquoi notre monde est-il ainsi ?</span></header><section aria-label="Carte mondiale interactive" ref={ref} className="map"/><aside className="panel"><h1>Explorer les sources de l'histoire humaine</h1><p>Déplacez la carte et explorez les territoires. Le catalogue de sources vérifiables sera connecté ici.</p><p className="status">{ready?'Carte chargée — catalogue documentaire en préparation':'Chargement de la carte…'}</p><button type="button" onClick={()=>map.current?.flyTo({center:[0,15],zoom:1.3})}>Revenir au monde</button></aside></main>;
}
