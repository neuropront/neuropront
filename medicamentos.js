/* ===========================================================
   MEDICAMENTOS — base ampla focada em uso brasileiro.
   Cada item: { name (princípio ativo), aliases (marcas/sinônimos),
                presentations (lista textual de apresentações) }
   O nome é o princípio ativo; aliases são nomes comerciais comuns.
   O autocomplete pesquisa em `name` + `aliases`.

   Foco: neurologia (alto volume) + clínica geral comum (HAS, DM,
   dislipidemia, GI, antibiótico, analgesia, respiratório, tireoide).
   ~280 medicamentos × 3–7 apresentações.

   Posologia: ao final deste arquivo há geradores de sugestões de
   prescrição por apresentação e por classe/medicamento. As sugestões
   são modelos editáveis para profissional médico, baseadas em padrões
   usuais de bula profissional/PCDT; não substituem conferência da bula
   vigente, contraindicações e ajustes por paciente.
=========================================================== */
window.MEDICATIONS = [

  /* =========================  NEUROLOGIA  ========================= */

  /* --- Antiepilépticos --- */
  { name: 'Ácido valproico', aliases: ['Depakene', 'Valpakine', 'Torval'], presentations: [
    '250 mg cápsula', '250 mg comprimido', '500 mg comprimido revestido',
    '500 mg comprimido de liberação prolongada', '250 mg/5 mL xarope',
  ]},
  { name: 'Divalproato de sódio', aliases: ['Depakote', 'Depakote ER'], presentations: [
    '125 mg cápsula', '250 mg cápsula', '250 mg comprimido', '500 mg comprimido revestido',
    '500 mg comprimido de liberação prolongada',
  ]}, 
  { name: 'Brivaracetam', aliases: ['Briviact'], presentations: [
    '10 mg comprimido revestido', '25 mg comprimido revestido',
    '50 mg comprimido revestido', '75 mg comprimido revestido', '100 mg comprimido revestido',
    '10 mg/mL solução oral', '10 mg/mL solução injetável'
  ]},
  { name: 'Carbamazepina', aliases: ['Tegretol', 'Tegretard', 'Tegrex'], presentations: [
    '200 mg comprimido', '400 mg comprimido',
    '200 mg comprimido CR (liberação controlada)', '400 mg comprimido CR',
    '20 mg/mL suspensão oral',
  ]},
  { name: 'Clobazam', aliases: ['Frisium', 'Urbanil'], presentations: [
    '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Clonazepam', aliases: ['Rivotril'], presentations: [
    '0,25 mg comprimido sublingual', '0,5 mg comprimido', '2 mg comprimido',
    '2,5 mg/mL solução oral (gotas)'
  ]},
  { name: 'Etossuximida', aliases: ['Petimid'], presentations: [
    '50mg/mL xarope', '50 mg/mL xarope'
  ]},
  { name: 'Fenitoína', aliases: ['Hidantal', 'Epelin', 'Fenital'], presentations: [
    '100 mg comprimido'
  ]},
  { name: 'Fenobarbital', aliases: ['Gardenal', 'Edhanol'], presentations: [
    '100 mg comprimido', '40 mg/mL Solução oral', '50 mg comprimido'
  ]},
  { name: 'Gabapentina', aliases: ['Neurontin', 'Progresse', 'Gamibetal'], presentations: [
    '300 mg cápsula', '400 mg cápsula', '600 mg comprimido revestido'
  ]},
  { name: 'Lacosamida', aliases: ['Vimpat'], presentations: [
    '50 mg comprimido revestido', '100 mg comprimido revestido',
    '150 mg comprimido revestido', '200 mg comprimido revestido',
    '10 mg/mL xarope', '10 mg/mL solução injetável'
  ]},
  { name: 'Lamotrigina', aliases: ['Lamictal', 'Lamitor', 'Neurium'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido', '200 mg comprimido',
    '5 mg comprimido dispersível', '25 mg comprimido dispersível', '100 mg comprimido dispersível'
  ]},
  { name: 'Levetiracetam', aliases: ['Keppra', 'Letiram'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '750 mg comprimido revestido', '1000 mg comprimido revestido',
    '100 mg/mL solução oral'
  ]},
  { name: 'Oxcarbazepina', aliases: ['Trileptal', 'Oxcarb'], presentations: [
    '300 mg comprimido revestido', '600 mg comprimido revestido', '60 mg/mL suspensão oral'
  ]},
  { name: 'Perampanel', aliases: ['Fycompa'], presentations: [
    '2 mg comprimido revestido', '6 mg comprimido revestido',
  ]},
  { name: 'Pregabalina', aliases: ['Lyrica', 'Prebictal', 'Lyripar', 'Dorene'], presentations: [
    '25 mg cápsula', '35 mg cápsula', '50 mg cápsula', '75 mg cápsula',
    '100 mg cápsula', '150 mg cápsula', '300 mg cápsula', '25 mg/mL solução oral', '20 mg/mL solução oral'
  ]},
  { name: 'Primidona', aliases: ['Primid'], presentations: [
    '100 mg comprimido', '250 mg comprimido'
  ]},
  { name: 'Topiramato', aliases: ['Topamax', 'Amato', 'Topiramax'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Vigabatrina', aliases: ['Sabril'], presentations: [
    '500 mg comprimido revestido', '500 mg sachê (granulado)'
  ]},
  { name: 'Zonisamida', aliases: ['Zonegran'], presentations: [
    '25 mg cápsula', '50 mg cápsula', '100 mg cápsula'
  ]},

  /* --- Anti-enxaqueca / cefaleia --- */
  { name: 'Sumatriptano', aliases: ['Imigran', 'Sumax'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido',
    '6 mg/0,5 mL solução injetável SC', '10 mg/0,1ml spray nasal'
  ]},
  { name: 'Zolmitriptano', aliases: ['Zomig'], presentations: [
    '2,5 mg comprimido revestido', '2,5 mg comprimido orodispersível'
  ]},
  { name: 'Naratriptano', aliases: ['Naramig'], presentations: ['2,5 mg comprimido revestido'] },
  { name: 'Rizatriptano', aliases: ['Maxalt', 'Maxalt-MLT'], presentations: [
    '10 mg comprimido revestido'
  ]},
  { name: 'Eletriptano', aliases: ['Zeforus'], presentations: [
    '20 mg comprimido revestido', '80 mg comprimido revestido'
  ]},
  { name: 'Flunarizina', aliases: ['Vertix', 'Sibelium', 'Fluxxon', 'Flunaril'], presentations: [
    '5 mg/ml solução', '10 mg comprimido'
  ]},
  { name: 'Cinarizina', aliases: ['Stugeron', 'Antigeron'], presentations: [
    '25 mg comprimido', '75 mg comprimido'
  ]},
  { name: 'Erenumabe', aliases: ['Pasurta'], presentations: [
    '70 mg/mL solução injetável SC (caneta)'
  ]},
  { name: 'Galcanezumabe', aliases: ['Emgality'], presentations: [
    '120 mg/mL solução injetável SC (caneta)', '100 mg/mL solução injetável SC (caneta)'
  ]},
  { name: 'Fremanezumabe', aliases: ['Ajovy'], presentations: [
    '225 mg/1,5 mL solução injetável SC'
  ]},
  { name: 'Toxina botulínica tipo A', aliases: ['Botox', 'Dysport', 'Prosigne', 'Xeomin'], presentations: [
    '100 U frasco-ampola pó liofilizado', '50 U frasco-ampola pó liofilizado',
    '500 U frasco-ampola pó liofilizado'
  ]},

  /* --- Antidepressivos --- */
  { name: 'Amitriptilina', aliases: ['Tryptanol', 'Amytril'], presentations: [
    '10 mg comprimido revestido', '25 mg comprimido revestido', '75 mg comprimido revestido'
  ]},
  { name: 'Nortriptilina', aliases: ['Pamelor'], presentations: [
    '10 mg cápsula', '25 mg cápsula', '50 mg cápsula', '75 mg cápsula', '2 mg/mL solução oral (Pamelor)' 
  ]},
  { name: 'Imipramina', aliases: ['Tofranil'], presentations: [
     '25 mg drágea'
  ]},
  { name: 'Clomipramina', aliases: ['Anafranil'], presentations: [
    '10 mg drágea', '25 mg drágea', '75 mg comprimido de liberação prolongada'
  ]},
  { name: 'Sertralina', aliases: ['Zoloft', 'Tolrest', 'Sercerin'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '75 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Fluoxetina', aliases: ['Prozac', 'Daforin', 'Verotina', 'Eufor'], presentations: [
    '10 mg cápsula', '20 mg cápsula', '20 mg comprimido dispersível', '20 mg/mL solução gotas'
  ]},
  { name: 'Paroxetina', aliases: ['Aropax', 'Pondera', 'Cebrilin', 'Roxetin'], presentations: [
    '10 mg comprimido revestido', '12,5 mg comprimido revestido CR', '15 mg comprimido revestido', '20 mg comprimido revestido', '25 mg comprimido revestido CR'
  ]},
  { name: 'Citalopram', aliases: ['Cipramil', 'Citta', 'Procimax'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Escitalopram', aliases: ['Lexapro', 'Reconter', 'Esci'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '15 mg comprimido revestido',
    '20 mg comprimido revestido', '20 mg/mL solução oral'
  ]},
  { name: 'Venlafaxina', aliases: ['Efexor XR', 'Venlift OD', 'Venlaxin'], presentations: [
    '37,5 mg cápsula de liberação prolongada', '75 mg cápsula de liberação prolongada', '150 mg cápsula de liberação prolongada'
  ]},
  { name: 'Desvenlafaxina', aliases: ['Pristiq', 'Zinedif', 'Elifore'], presentations: [
    '50 mg comprimido de liberação prolongada', '100 mg comprimido de liberação prolongada'
  ]},
  { name: 'Duloxetina', aliases: ['Cymbalta', 'Velija', 'Duxete'], presentations: [
    '30 mg cápsula gastrorresistente', '60 mg cápsula gastrorresistente'
  ]},
  { name: 'Mirtazapina', aliases: ['Remeron', 'Menelat', 'Razapina'], presentations: [
    '15 mg comprimido revestido', '30 mg comprimido revestido', '45 mg comprimido revestido',
    '15 mg comprimido orodispersível', '30 mg comprimido orodispersível', '45 mg comprimido orodispersível'
  ]},
  { name: 'Trazodona', aliases: ['Donaren', 'Donaren retard'], presentations: [
    '50 mg comprimido', '100 mg comprimido', '150 mg comprimido de liberação prolongada',
    '300 mg comprimido de liberação prolongada'
  ]},
  { name: 'Bupropiona', aliases: ['Wellbutrin XL', 'Bup', 'Zyban', 'Zetron'], presentations: [
    '150 mg comprimido de liberação prolongada', '300 mg comprimido de liberação prolongada'
  ]},
  { name: 'Vortioxetina', aliases: ['Brintellix'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '15 mg comprimido revestido', '20 mg comprimido revestido'
  ]},
  { name: 'Agomelatina', aliases: ['Valdoxan'], presentations: ['25 mg comprimido revestido'] },

  /* --- Ansiolíticos / hipnóticos --- */
  { name: 'Alprazolam', aliases: ['Frontal', 'Apraz', 'Tranquinal'], presentations: [
    '0,25 mg comprimido', '0,5 mg comprimido', '1 mg comprimido', '2 mg comprimido',
    '0,5 mg comprimido de liberação prolongada', '1 mg comprimido de liberação prolongada',
    '2 mg comprimido de liberação prolongada'
  ]},
  { name: 'Diazepam', aliases: ['Valium', 'Compaz', 'Diazefast'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '5 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Lorazepam', aliases: ['Lorax', 'Lorium'], presentations: [
    '1 mg comprimido', '2 mg comprimido'
  ]},
  { name: 'Bromazepam', aliases: ['Lexotan', 'Somalium'], presentations: [
    '3 mg comprimido', '6 mg comprimido', '2,5mg/mL solução oral'
  ]},
  { name: 'Midazolam', aliases: ['Dormonid', 'Dormire'], presentations: [
    '7,5 mg comprimido revestido', '15 mg comprimido revestido', '2 mg/mL solução oral',
    '5 mg/mL solução injetável (ampola 3 mL/10 mL)', '1 mg/mL solução injetável'
  ]},
  { name: 'Buspirona', aliases: ['Buspar', 'Brispar', 'Ansial'], presentations: [
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Hidroxizina', aliases: ['Hixizine', 'Pruri-gel'], presentations: [
    '25 mg comprimido revestido', '2 mg/mL xarope'
  ]},
  { name: 'Zolpidem', aliases: ['Stilnox', 'Lioram', 'Patz'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido',
    '6,25 mg comprimido revestido CR', '12,5 mg comprimido revestido CR',
    '5 mg comprimido sublingual', '10 mg comprimido sublingual'
  ]},
  { name: 'Eszopiclona', aliases: ['Lunesta'], presentations: [
    '1 mg comprimido revestido', '2 mg comprimido revestido', '3 mg comprimido revestido'
  ]},
  { name: 'Melatonina', aliases: ['Slenyto', 'Circadin'], presentations: [
    '0,21 mg comprimido', '3 mg comprimido', '5 mg comprimido', '2 mg comprimido CR (Circadin)'
  ]},

  /* --- Antipsicóticos --- */
  { name: 'Haloperidol', aliases: ['Haldol'], presentations: [
    '1 mg comprimido', '5 mg comprimido', '2 mg/mL solução oral',
    '5 mg/mL solução injetável (ampola 1 mL)', '50 mg/mL decanoato injetável'
  ]},
  { name: 'Risperidona', aliases: ['Risperdal', 'Zargus', 'Riss', 'Respidon'], presentations: [
    '0,5 mg comprimido revestido', '1 mg comprimido revestido', '2 mg comprimido revestido', '3 mg comprimido revestido',
    '1 mg/mL solução oral', '25 mg/2 mL injetável de liberação prolongada (Consta)'
  ]},
  { name: 'Quetiapina', aliases: ['Seroquel XRO', 'Quetros', 'Quetiapin', 'Q-pin'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido', '200 mg comprimido revestido',
    '300 mg comprimido revestido', '100 mg comprimido revestido', 'Quetipin SO 12,5mg Suspensão Oral', 'Quetipin SO 12,5mg Suspensão Oral', 
    '50 mg comprimido revestido XRO', '200 mg XRO', '300 mg XRO'
  ]},
  { name: 'Olanzapina', aliases: ['Zyprexa', 'Zaldiar?', 'Olapine'], presentations: [
    '2,5 mg comprimido revestido', '5 mg comprimido revestido',
    '10 mg comprimido revestido', '5 mg comprimido orodispersível', '10 mg comprimido orodispersível'
  ]},
  { name: 'Aripiprazol', aliases: ['Abilify', 'Aristab', 'Arpilif'], presentations: [
    '10 mg comprimido', '15 mg comprimido', '20 mg comprimido', '30 mg comprimido',
    '1mg/ml suspensão oral',  '20mg/ml suspensão gotas'
  ]},
  { name: 'Clozapina', aliases: ['Leponex'], presentations: [
    '25 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Ziprasidona', aliases: ['Geodon'], presentations: [
    '40 mg cápsula', '80 mg cápsula'
  ]},
  { name: 'Periciazina', aliases: ['Neuleptil'], presentations: [
    '10 mg cápsula', '40 mg/mL solução oral 4%', '10 mg/mL solução oral 1%'
  ]},
  { name: 'Levomepromazina', aliases: ['Neozine'], presentations: [
    '25 mg comprimido', '100 mg comprimido', '40 mg/mL gotas (4%)'
  ]},
  { name: 'Tioridazina', aliases: ['Melleril'], presentations: [
    '10 mg comprimido', '25 mg comprimido', '50 mg comprimido', '100 mg comprimido', '200 mg comprimido'
  ]},
  { name: 'Lurasidona', aliases: ['Latuda'], presentations: [
    '20 mg comprimido', '40 mg comprimido', '80 mg comprimido'
  ]},

  /* --- Anti-Parkinson e movimentos --- */
  { name: 'Levodopa + benserazida', aliases: ['Prolopa', 'Prolopa BD'], presentations: [
    '100/25 mg comprimido', '200/50 mg comprimido',
    '100/25 mg comprimido dispersível', '100/25 mg cápsula HBS'
  ]},
  { name: 'Levodopa + carbidopa', aliases: ['Sinemet', 'Cronomet', 'Parkidopa'], presentations: [
    '250/25 mg comprimido', '200/50 mg comprimido'
  ]},
  { name: 'Levodopa + carbidopa + entacapona', aliases: ['Stalevo'], presentations: [
    '50/12,5/200 mg comprimido revestido', '100/25/200 mg comprimido revestido', '150/37,5/200 mg comprimido revestido'
  ]},
  { name: 'Pramipexol', aliases: ['Sifrol', 'Sifrol ER', 'Stadium'], presentations: [
    '0,125 mg comprimido', '0,25 mg comprimido', '1 mg comprimido',
    '0,375 mg comprimido ER', '0,75 mg comprimido ER', '1,5 mg comprimido ER'
  ]},
  { name: 'Ropinirol', aliases: ['Requip XL'], presentations: [
    '0,25 mg comprimido', '1 mg comprimido', '2 mg comprimido',
    '5 mg comprimido', '8 mg comprimido', 'comprimidos de liberação prolongada (XL)'
  ]},
  { name: 'Rotigotina', aliases: ['Neupro'], presentations: [
    '2 mg/24h adesivo transdérmico', '4 mg/24h adesivo transdérmico',
    '6 mg/24h adesivo transdérmico', '8 mg/24h adesivo transdérmico'
  ]},
  { name: 'Amantadina', aliases: ['Mantidan'], presentations: [
    '100 mg cápsula'
  ]},
  { name: 'Selegilina', aliases: ['Niar', 'Jumexil'], presentations: [
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Rasagilina', aliases: ['Azilect'], presentations: [
    '1 mg comprimido'
  ]},
  { name: 'Entacapona', aliases: ['Comtan'], presentations: [
    '200 mg comprimido revestido'
  ]},
  { name: 'Biperideno', aliases: ['Akineton', 'Cinetol'], presentations: [
    '2 mg comprimido', '4 mg comprimido de liberação prolongada',
    '5 mg/1 mL solução injetável'
  ]},
  { name: 'Triexifenidil', aliases: ['Artane'], presentations: [
    '5 mg comprimido', '2 mg comprimido'
  ]},
  { name: 'Safinamida', aliases: ['Xadago'], presentations: ['50 mg comprimido', '100 mg comprimido'] },

  /* --- Demência (anticolinesterásicos / memantina) --- */
  { name: 'Donepezila', aliases: ['Eranz', 'Donila', 'Doneprion'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido'
  ]},
  { name: 'Rivastigmina', aliases: ['Exelon', 'Prometax'], presentations: [
    '1,5 mg cápsula', '3 mg cápsula', '4,5 mg cápsula', '6 mg cápsula',
    '4,6 mg/24h adesivo transdérmico 9mg', '9,5 mg/24h adesivo transdérmico 18mg',
    '13,3 mg/24h adesivo transdérmico 27mg', '2 mg/mL solução oral'
  ]},
  { name: 'Galantamina', aliases: ['Reminyl ER'], presentations: [
    '8 mg cápsula de liberação prolongada', '16 mg cápsula de liberação prolongada',
    '24 mg cápsula de liberação prolongada'
  ]},
  { name: 'Memantina', aliases: ['Ebix', 'Alois', 'Memora'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido',  '05 mg comprimido ODT',  '10mg/ml Gotas', '20mg/ml Gotas'
  ]},

  /* --- Esclerose múltipla --- */
  { name: 'Betainterferona 1a', aliases: ['Avonex', 'Rebif'], presentations: [
   '22 mcg/0,5 mL solução injetável SC (Rebif)', '44 mcg/0,5 mL solução injetável SC (Rebif)'
  ]},
  { name: 'Interferona beta-1b', aliases: ['Betaferon', 'Extavia'], presentations: [
    '0,3 mg pó liofilizado para solução injetável SC'
  ]},
  { name: 'Acetato de glatirâmer', aliases: ['Copaxone'], presentations: [
    '20 mg/mL seringa preenchida SC', '40 mg/mL seringa preenchida SC'
  ]},
  { name: 'Fingolimode', aliases: ['Gilenya'], presentations: [
    '0,5 mg cápsula'
  ]},
  { name: 'Teriflunomida', aliases: ['Aubagio'], presentations: [
    '14 mg comprimido revestido'
  ]},
  { name: 'Fumarato de dimetila', aliases: ['Tecfidera'], presentations: [
    '120 mg cápsula gastrorresistente', '240 mg cápsula gastrorresistente'
  ]},
  { name: 'Natalizumabe', aliases: ['Tysabri'], presentations: [
    '300 mg/15 mL solução para infusão IV'
  ]},
  { name: 'Ocrelizumabe', aliases: ['Ocrevus'], presentations: [
    '300 mg/10 mL concentrado para solução para infusão IV'
  ]},
  { name: 'Cladribina', aliases: ['Mavenclad'], presentations: ['10 mg comprimido'] },

  /* --- Espasticidade / relaxantes --- */
  { name: 'Baclofeno', aliases: ['Lioresal'], presentations: [
    '10 mg comprimido'
  ]},
  { name: 'Tizanidina', aliases: ['Sirdalud'], presentations: [
    '2 mg comprimido'
  ]},
  { name: 'Ciclobenzaprina', aliases: ['Miosan', 'Mirtax', 'Benziflex'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '15 mg cp liberação prolongada'
  ]},
  { name: 'Carisoprodol + paracetamol + cafeína + diclofenaco', aliases: ['Tandrilax', 'Mioflex-A', 'Torsilax'], presentations: [
    '125 + 300 + 30 + 50 mg comprimido revestido'
  ]},

  /* --- Vertigem / antieméticos / cinetose --- */
  { name: 'Betaistina', aliases: ['Labirin', 'Vertix'], presentations: [
    '8 mg comprimido', '16 mg comprimido', '24 mg comprimido', '32 mg comprimido XR', '48 mg comprimido XR'
  ]},
  { name: 'Dimenidrinato', aliases: ['Dramin', 'Dramin B6'], presentations: [
    '50 mg comprimido', '25 mg comprimido', '25 mg/mL xarope'
  ]},
  { name: 'Meclizina', aliases: ['Meclin'], presentations: ['25 mg comprimido', '50mg comprimido'] },
  { name: 'Prometazina', aliases: ['Fenergan'], presentations: [
    '25 mg comprimido revestido', '25 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Ondansetrona', aliases: ['Zofran', 'Vonau', 'Nausedron'], presentations: [
    '4 mg comprimido', '8 mg comprimido', '4 mg comprimido orodispersível',
    '8 mg comprimido orodispersível', '0,8 mg/mL solução oral',
    '2 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Metoclopramida', aliases: ['Plasil'], presentations: [
    '10 mg comprimido', '4 mg/mL solução oral (gotas)',
    '5 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Bromoprida', aliases: ['Digesan', 'Plamet'], presentations: [
    '10 mg cápsula', '4 mg/mL solução oral (gotas)',
    '5 mg/mL solução injetável'
  ]},

  /* --- Outros neuro --- */
  { name: 'Riluzol', aliases: ['Rilutek'], presentations: ['50 mg comprimido revestido'] },
  { name: 'Edaravona', aliases: ['Radicava'], presentations: ['30 mg/20 mL solução para infusão IV'] },
  { name: 'Tetrabenazina', aliases: ['Xenazine'], presentations: ['25 mg comprimido'] },
  { name: 'Piracetam', aliases: ['Nootropil'], presentations: [
    '800 mg comprimido revestido', '400 mg comprimido revestido',
    '300 mg/5mL solução oral'
  ]},
  { name: 'Citicolina', aliases: ['Somazina', 'Esevrel'], presentations: [
    '500 mg comprimido revestido', '500 mg/4 mL solução oral',
    '125 mg/mL solução oral', '500 mg/4 mL solução injetável'
  ]},
  { name: 'Ginkgo biloba', aliases: ['Tebonin', 'Tanakan', 'Equitam'], presentations: [
    '80 mg comprimido revestido', '120 mg comprimido revestido'
  ]},
  { name: 'Vinpocetina', aliases: ['Cavinton', 'Vinpotrop'], presentations: [
    '5 mg comprimido'
  ]},

  /* =========================  CARDIOVASCULAR  ========================= */

  /* --- IECA --- */
  { name: 'Captopril', aliases: ['Capoten'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Enalapril', aliases: ['Renitec', 'Vasopril'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Ramipril', aliases: ['Triatec', 'Naprix'], presentations: [
    '2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Lisinopril', aliases: ['Zestril', 'Prinivil'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Perindopril', aliases: ['Coversyl'], presentations: [
    '4 mg comprimido', '5 mg comprimido', '8 mg comprimido', '10 mg comprimido'
  ]},

  /* --- BRA --- */
  { name: 'Losartana potássica', aliases: ['Cozaar', 'Aradois', 'Corus'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Valsartana', aliases: ['Diovan', 'Tareg'], presentations: [
    '40 mg comprimido revestido', '80 mg comprimido revestido',
    '160 mg comprimido revestido', '320 mg comprimido revestido'
  ]},
  { name: 'Olmesartana', aliases: ['Benicar', 'Olmetec', 'Tensaliv'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Telmisartana', aliases: ['Micardis', 'Pritor'], presentations: [
    '40 mg comprimido', '80 mg comprimido'
  ]},
  { name: 'Candesartana', aliases: ['Atacand', 'Candezar'], presentations: [
    '8 mg comprimido', '16 mg comprimido', '32 mg comprimido'
  ]},
  { name: 'Irbesartana', aliases: ['Avapro'], presentations: [
    '150 mg comprimido', '300 mg comprimido'
  ]},

  /* --- BCC --- */
  { name: 'Anlodipino', aliases: ['Norvasc', 'Pressat'], presentations: [
    '2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Nifedipino', aliases: ['Adalat Oros', 'Adalat Retard'], presentations: [
    '20 mg comprimido retard', '40 mg comprimido OROS',
    '10 mg cápsula'
  ]},
  { name: 'Lercanidipino', aliases: ['Zanidip'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido'
  ]},
  { name: 'Manidipino', aliases: ['Manivasc'], presentations: ['10 mg comprimido', '20 mg comprimido'] },
  { name: 'Verapamil', aliases: ['Dilacoron', 'Verapamil retard'], presentations: [
    '80 mg comprimido', '120 mg comprimido retard'
  ]},
  { name: 'Diltiazem', aliases: ['Cardizem', 'Cardizem CD', 'Cardizem SR', 'Balcor'], presentations: [
    '60 mg comprimido', '30 mg comprimido '
  ]},

  /* --- Beta-bloqueadores --- */
  { name: 'Propranolol', aliases: ['Inderal', 'Cloridrato de propranolol'], presentations: [
    '10 mg comprimido', '40 mg comprimido', '80 mg comprimido'
  ]},
  { name: 'Atenolol', aliases: ['Atenol', 'Ablok'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Metoprolol', aliases: ['Seloken Zok', 'Selozok', 'Lopressor'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Bisoprolol', aliases: ['Concor', 'Bicor'], presentations: [
    '1,25 mg comprimido', '2,5 mg comprimido',
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Carvedilol', aliases: ['Coreg', 'Cardilol', 'Karvil'], presentations: [
    '3,125 mg comprimido', '6,25 mg comprimido',
    '12,5 mg comprimido', '25 mg comprimido'
  ]},
  { name: 'Nebivolol', aliases: ['Nebilet'], presentations: ['5 mg comprimido', '2,5 mg comprimido' ] },

  /* --- Diuréticos --- */
  { name: 'Hidroclorotiazida', aliases: ['Clorana', 'Drenol'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Clortalidona', aliases: ['Higroton', 'Clortil'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Indapamida', aliases: ['Natrilix SR', 'Indapen'], presentations: [
    '1,5 mg comprimido revestido SR', '2,5 mg comprimido revestido'
  ]},
  { name: 'Furosemida', aliases: ['Lasix'], presentations: [
    '40 mg comprimido', '10 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Espironolactona', aliases: ['Aldactone', 'Diacqua'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Bumetanida', aliases: ['Burinax'], presentations: ['1 mg comprimido'] },

  /* --- Outros anti-hipertensivos / vasos --- */
  { name: 'Clonidina', aliases: ['Atensina'], presentations: [
    '0,100 mg comprimido', '0,150 mg comprimido', '0,200 mg comprimido'
  ]},
  { name: 'Metildopa', aliases: ['Aldomet'], presentations: [
    '250 mg comprimido', '500 mg comprimido'
  ]},
  { name: 'Hidralazina', aliases: ['Apresolina', 'Nepresol'], presentations: [
    '25 mg comprimido', '50 mg comprimido',
    '20 mg solução injetável (ampola 1 mL)'
  ]},
  { name: 'Doxazosina', aliases: ['Carduran XL'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '4 mg comprimido', '4 mg comprimido XL'
  ]},
  { name: 'Prazosina', aliases: ['Minipress'], presentations: ['1 mg cápsula', '2 mg cápsula', '4 mg cápsula'] },

  /* --- Antiagregantes / anticoagulantes --- */
  { name: 'Ácido acetilsalicílico (AAS)', aliases: ['AAS', 'Aspirina', 'Aspirina prevent', 'Somalgin'], presentations: [
    '100 mg comprimido', '300 mg comprimido', '500 mg comprimido',
    '81 mg comprimido tamponado', '100 mg comprimido revestido'
  ]},
  { name: 'Clopidogrel', aliases: ['Plavix', 'Iscover', 'Plagrel'], presentations: [
    '75 mg comprimido revestido'
  ]},
  { name: 'Ticagrelor', aliases: ['Brilinta'], presentations: [
    '90 mg comprimido revestido'
  ]},
  { name: 'Prasugrel', aliases: ['Effient'], presentations: ['5 mg comprimido revestido', '10 mg comprimido revestido'] },
  { name: 'Varfarina', aliases: ['Marevan', 'Coumadin'], presentations: [
    '1 mg comprimido', '2,5 mg comprimido', '5 mg comprimido', '7,5 mg comprimido'
  ]},
  { name: 'Rivaroxabana', aliases: ['Xarelto'], presentations: [
    '10 mg comprimido revestido', '15 mg comprimido revestido', '20 mg comprimido revestido',
    '2,5 mg comprimido revestido'
  ]},
  { name: 'Dabigatrana', aliases: ['Pradaxa'], presentations: [
    '75 mg cápsula', '110 mg cápsula', '150 mg cápsula'
  ]},
  { name: 'Apixabana', aliases: ['Eliquis'], presentations: [
    '2,5 mg comprimido revestido', '5 mg comprimido revestido'
  ]},
  { name: 'Edoxabana', aliases: ['Lixiana'], presentations: [
    '15 mg comprimido', '30 mg comprimido', '60 mg comprimido'
  ]},
  { name: 'Enoxaparina', aliases: ['Clexane', 'Versa'], presentations: [
    '20 mg/0,2 mL seringa preenchida SC', '40 mg/0,4 mL seringa preenchida SC',
    '60 mg/0,6 mL seringa preenchida SC', '80 mg/0,8 mL seringa preenchida SC',
    '100 mg/1 mL seringa preenchida SC'
  ]},

  /* --- Hipolipemiantes --- */
  { name: 'Sinvastatina', aliases: ['Zocor', 'Sinvascor'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido',
    '40 mg comprimido revestido'
  ]},
  { name: 'Atorvastatina', aliases: ['Citalor', 'Lipitor', 'Atorbest'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido',
    '40 mg comprimido revestido', '80 mg comprimido revestido'
  ]},
  { name: 'Rosuvastatina', aliases: ['Crestor', 'Vivacor', 'Rosucor', 'Trezor'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido',
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Pravastatina', aliases: ['Pravacol'], presentations: [
    '10 mg comprimido', '20 mg comprimido', '40 mg comprimido'
  ]},
  { name: 'Pitavastatina', aliases: ['Livazo'], presentations: [
    '2 mg comprimido', '4 mg comprimido'
  ]},
  { name: 'Ezetimiba', aliases: ['Zetia', 'Ezetrol'], presentations: ['10 mg comprimido'] },
  { name: 'Ezetimiba + sinvastatina', aliases: ['Vytorin', 'Zintrepid'], presentations: [
    '10 + 20 mg comprimido', '10 + 40 mg comprimido'
  ]},
  { name: 'Ciprofibrato', aliases: ['Lipless', 'Lipanon'], presentations: ['100 mg comprimido'] },
  { name: 'Fenofibrato', aliases: ['Lipidil', 'Trolip'], presentations: [
    '160 mg comprimido revestido', '200 mg cápsula', '250 mg cápsula'
  ]},
  { name: 'Bezafibrato', aliases: ['Cedur retard'], presentations: ['200 mg comprimido', '400 mg retard'] },
  { name: 'Gemfibrozila', aliases: ['Lopid'], presentations: ['300 mg comprimido', '600 mg comprimido', '900 mg comprimido'] },
  { name: 'Ácidos graxos ômega-3 (EPA + DHA)', aliases: ['Vitafor ômega', 'Naturetti ômega'], presentations: [
    '1000 mg cápsula gelatinosa', '1500 mg cápsula gelatinosa'
  ]},

  /* =========================  ENDÓCRINO  ========================= */

  /* --- Diabetes orais --- */
  { name: 'Metformina', aliases: ['Glifage', 'Glifage XR', 'Glucoformin'], presentations: [
    '500 mg comprimido', '850 mg comprimido', '1000 mg comprimido',
    '500 mg comprimido XR', '750 mg comprimido XR', '1000 mg comprimido XR'
  ]},
  { name: 'Glibenclamida', aliases: ['Daonil'], presentations: ['5 mg comprimido'] },
  { name: 'Glimepirida', aliases: ['Amaryl', 'Glimepil'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '4 mg comprimido', '6 mg comprimido'
  ]},
  { name: 'Gliclazida', aliases: ['Diamicron MR', 'Azukon'], presentations: [
    '30 mg comprimido MR', '60 mg comprimido MR', '80 mg comprimido'
  ]},
  { name: 'Sitagliptina', aliases: ['Januvia', 'Sintenza'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Vildagliptina', aliases: ['Galvus'], presentations: ['50 mg comprimido'] },
  { name: 'Linagliptina', aliases: ['Trayenta'], presentations: ['5 mg comprimido revestido'] },
  { name: 'Saxagliptina', aliases: ['Onglyza'], presentations: ['2,5 mg comprimido revestido', '5 mg comprimido revestido'] },
  { name: 'Dapagliflozina', aliases: ['Forxiga'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido'
  ]},
  { name: 'Empagliflozina', aliases: ['Jardiance'], presentations: [
    '10 mg comprimido revestido', '25 mg comprimido revestido'
  ]},
  { name: 'Canagliflozina', aliases: ['Invokana'], presentations: [
    '100 mg comprimido revestido', '300 mg comprimido revestido'
  ]},
  { name: 'Pioglitazona', aliases: ['Actos', 'Pioglit'], presentations: [
    '15 mg comprimido', '30 mg comprimido', '45 mg comprimido'
  ]},
  { name: 'Acarbose', aliases: ['Glucobay', 'Aglucose'], presentations: [
    '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Repaglinida', aliases: ['Posprand', 'Novonorm'], presentations: [
    '0,5 mg comprimido', '1 mg comprimido', '2 mg comprimido'
  ]},

  /* --- GLP-1 / GIP --- */
  { name: 'Liraglutida', aliases: ['Victoza', 'Saxenda'], presentations: [
    '6 mg/mL solução injetável SC (caneta 3 mL — Victoza)',
    '6 mg/mL solução injetável SC (caneta 3 mL — Saxenda)'
  ]},
  { name: 'Dulaglutida', aliases: ['Trulicity'], presentations: [
    '0,75 mg/0,5 mL caneta SC', '1,5 mg/0,5 mL caneta SC'
  ]},
  { name: 'Semaglutida', aliases: ['Ozempic', 'Wegovy', 'Rybelsus'], presentations: [
    '0,25 mg/dose caneta SC (Ozempic)', '0,5 mg/dose caneta SC (Ozempic)',
    '1 mg/dose caneta SC (Ozempic)', '2 mg/dose caneta SC (Ozempic)',
    '2,4 mg/dose caneta SC (Wegovy)',
    '3 mg comprimido (Rybelsus)', '7 mg comprimido (Rybelsus)', '14 mg comprimido (Rybelsus)'
  ]},
  { name: 'Tirzepatida', aliases: ['Mounjaro'], presentations: [
    '2,5 mg/0,5 mL caneta SC', '5 mg/0,5 mL caneta SC',
    '7,5 mg/0,5 mL caneta SC', '10 mg/0,5 mL caneta SC',
    '12,5 mg/0,5 mL caneta SC', '15 mg/0,5 mL caneta SC'
  ]},

  /* --- Insulinas --- */
  { name: 'Insulina regular', aliases: ['Humulin R', 'Novolin R'], presentations: [
    '100 UI/mL frasco-ampola 10 mL', '100 UI/mL refil 3 mL'
  ]},
  { name: 'Insulina NPH', aliases: ['Humulin N', 'Novolin N'], presentations: [
    '100 UI/mL frasco-ampola 10 mL', '100 UI/mL refil 3 mL'
  ]},
  { name: 'Insulina glargina', aliases: ['Lantus', 'Toujeo', 'Basaglar'], presentations: [
    '100 UI/mL caneta 3 mL (Lantus)', '300 UI/mL caneta 1,5 mL (Toujeo)',
    '100 UI/mL caneta 3 mL (Basaglar)'
  ]},
  { name: 'Insulina detemir', aliases: ['Levemir'], presentations: ['100 UI/mL caneta 3 mL'] },
  { name: 'Insulina degludeca', aliases: ['Tresiba'], presentations: [
    '100 UI/mL caneta 3 mL', '200 UI/mL caneta 3 mL'
  ]},
  { name: 'Insulina lispro', aliases: ['Humalog'], presentations: [
    '100 UI/mL caneta 3 mL', '100 UI/mL frasco-ampola 10 mL'
  ]},
  { name: 'Insulina asparte', aliases: ['NovoRapid', 'Fiasp'], presentations: [
    '100 UI/mL caneta 3 mL', '100 UI/mL frasco-ampola 10 mL'
  ]},
  { name: 'Insulina glulisina', aliases: ['Apidra'], presentations: ['100 UI/mL caneta 3 mL'] },

  /* --- Tireoide --- */
  { name: 'Levotiroxina sódica', aliases: ['Puran T4', 'Synthroid', 'Euthyrox', 'Levoid'], presentations: [
    '12,5 mcg comprimido', '25 mcg comprimido', '37,5 mcg comprimido',
    '50 mcg comprimido', '62,5 mcg comprimido', '75 mcg comprimido',
    '88 mcg comprimido', '100 mcg comprimido', '112 mcg comprimido',
    '125 mcg comprimido', '137 mcg comprimido', '150 mcg comprimido',
    '175 mcg comprimido', '200 mcg comprimido'
  ]},
  { name: 'Liotironina', aliases: ['Cynomel'], presentations: ['25 mcg comprimido'] },
  { name: 'Metimazol', aliases: ['Tapazol'], presentations: ['5 mg comprimido', '10 mg comprimido'] },
  { name: 'Propiltiouracil', aliases: ['Propilracil'], presentations: ['100 mg comprimido'] },

  /* =========================  GASTROINTESTINAL  ========================= */
  { name: 'Omeprazol', aliases: ['Losec', 'Peprazol', 'Gastrium'], presentations: [
    '10 mg cápsula', '20 mg cápsula', '40 mg cápsula',
    '40 mg pó liofilizado para solução injetável'
  ]},
  { name: 'Pantoprazol', aliases: ['Pantozol', 'Pantogastric'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido',
    '40 mg pó liofilizado injetável'
  ]},
  { name: 'Esomeprazol', aliases: ['Nexium'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido', '40 mg pó liofilizado injetável'
  ]},
  { name: 'Lansoprazol', aliases: ['Prazol', 'Ogastro'], presentations: ['15 mg cápsula', '30 mg cápsula'] },
  { name: 'Rabeprazol', aliases: ['Pariet'], presentations: ['10 mg comprimido revestido', '20 mg comprimido revestido'] },
  { name: 'Famotidina', aliases: ['Famox', 'Famodine'], presentations: ['20 mg comprimido', '40 mg comprimido'] },
  { name: 'Hidróxido de alumínio + magnésio', aliases: ['Mylanta Plus', 'Maalox plus'], presentations: [
    'suspensão oral', 'comprimido mastigável'
  ]},
  { name: 'Hioscina (butilescopolamina)', aliases: ['Buscopan', 'Buscofem'], presentations: [
    '10 mg drágea', '20 mg/mL solução injetável (ampola 1 mL)',
    '6,67 mg/mL solução oral (gotas)'
  ]},
  { name: 'Hioscina + dipirona', aliases: ['Buscopan composto', 'Atroveran composto'], presentations: [
    '10 + 250 mg drágea', '4 + 500 mg/mL solução injetável (ampola 5 mL)'
  ]},
  { name: 'Lactulose', aliases: ['Lactulona', 'Pentalac'], presentations: [
    '667 mg/mL xarope', '10 g/15 mL xarope'
  ]},
  { name: 'Picossulfato de sódio', aliases: ['Guttalax'], presentations: ['7,5 mg/mL gotas'] },
  { name: 'Bisacodil', aliases: ['Dulcolax'], presentations: ['5 mg drágea'] },
  { name: 'Polietilenoglicol', aliases: ['Muvinor', 'Lacto-purga MAX'], presentations: [
    '17 g sachê pó para solução oral'
  ]},
  { name: 'Loperamida', aliases: ['Imosec', 'Diasec'], presentations: ['2 mg comprimido', '2 mg cápsula'] },
  { name: 'Simeticona', aliases: ['Luftal', 'Flatoril'], presentations: [
    '40 mg comprimido', '75 mg/mL gotas'
  ]},

  /* =========================  ANALGESIA / AINE / OPIOIDES  ========================= */
  { name: 'Paracetamol', aliases: ['Tylenol', 'Vick Pyrena'], presentations: [
    '500 mg comprimido', '750 mg comprimido', '200 mg/mL solução oral (gotas)',
    '32 mg/mL solução oral (xarope)'
  ]},
  { name: 'Dipirona sódica', aliases: ['Novalgina', 'Anador', 'Magnopyrol'], presentations: [
    '500 mg comprimido', '1000 mg comprimido', '500 mg/mL solução oral (gotas)',
    '50 mg/mL solução oral', '500 mg/mL solução injetável (ampola 2 mL/5 mL)'
  ]},
  { name: 'Ibuprofeno', aliases: ['Alivium', 'Advil', 'Motrin'], presentations: [
    '200 mg cápsula gel', '300 mg comprimido revestido',
    '400 mg comprimido revestido', '600 mg comprimido revestido',
    '50 mg/mL suspensão oral', '100 mg/mL suspensão oral'
  ]},
  { name: 'Naproxeno', aliases: ['Flanax', 'Naprosyn'], presentations: [
    '250 mg comprimido', '500 mg comprimido', '550 mg comprimido revestido'
  ]},
  { name: 'Diclofenaco sódico', aliases: ['Voltaren', 'Cataflan retard'], presentations: [
    '50 mg comprimido revestido', '75 mg comprimido revestido SR',
    '100 mg comprimido SR',
    '25 mg/mL solução injetável (ampola 3 mL)'
  ]},
  { name: 'Diclofenaco potássico', aliases: ['Cataflam'], presentations: [
    '50 mg comprimido revestido', '15 mg/mL gotas'
  ]},
  { name: 'Cetoprofeno', aliases: ['Profenid', 'Bi-profenid'], presentations: [
    '50 mg cápsula', '100 mg comprimido revestido',
    '150 mg comprimido revestido bi-profenid', '20 mg/mL gotas',
    '50 mg/mL solução injetável IV/IM (ampola 2 mL)', '100 mg pó liofilizado injetável'
  ]},
  { name: 'Cetorolaco', aliases: ['Toragesic', 'Toradol'], presentations: [
    '10 mg comprimido sublingual', '30 mg/mL solução injetável (ampola 1 mL)'
  ]},
  { name: 'Nimesulida', aliases: ['Nisulid', 'Scaflam'], presentations: [
    '100 mg comprimido', '50 mg/mL gotas', '100 mg pó para suspensão oral (sachê)'
  ]},
  { name: 'Meloxicam', aliases: ['Movatec', 'Meloxiart'], presentations: [
    '7,5 mg comprimido', '15 mg comprimido', '15 mg/1,5 mL solução injetável'
  ]},
  { name: 'Etoricoxibe', aliases: ['Arcoxia'], presentations: [
    '60 mg comprimido revestido', '90 mg comprimido revestido', '120 mg comprimido revestido'
  ]},
  { name: 'Celecoxibe', aliases: ['Celebra'], presentations: ['100 mg cápsula', '200 mg cápsula'] },
  { name: 'Tramadol', aliases: ['Tramal'], presentations: [
    '50 mg cápsula', '100 mg comprimido SR',
    '100 mg/mL gotas', '50 mg/mL solução injetável (ampola 1 mL/2 mL)'
  ]},
  { name: 'Tramadol + paracetamol', aliases: ['Ultracet'], presentations: [
    '37,5 + 325 mg comprimido revestido'
  ]},
  { name: 'Codeína', aliases: ['Codein', 'Tylex'], presentations: [
    '30 mg comprimido', '60 mg comprimido',
    '30 mg + 500 mg paracetamol comprimido (Tylex 30/500)'
  ]},
  { name: 'Morfina', aliases: ['Dimorf', 'MS Long'], presentations: [
    '10 mg comprimido', '30 mg comprimido', '10 mg/mL solução oral',
    '10 mg/mL solução injetável (ampola 1 mL)',
    '30 mg cápsula MS Long', '60 mg cápsula MS Long', '100 mg cápsula MS Long'
  ]},
  { name: 'Oxicodona', aliases: ['Oxycontin'], presentations: [
    '10 mg comprimido CR', '20 mg comprimido CR', '40 mg comprimido CR'
  ]},
  { name: 'Fentanil', aliases: ['Durogesic'], presentations: [
    '12 mcg/h adesivo transdérmico', '25 mcg/h adesivo transdérmico',
    '50 mcg/h adesivo transdérmico', '75 mcg/h adesivo transdérmico',
    '100 mcg/h adesivo transdérmico', '50 mcg/mL solução injetável'
  ]},
  { name: 'Metadona', aliases: ['Mytedom'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '10 mg/mL solução injetável'
  ]},
  { name: 'Capsaicina', aliases: ['Moment', 'Capsidor'], presentations: [
    '0,025% creme', '0,075% creme', '8% adesivo transdérmico (Qutenza)'
  ]},

  /* =========================  ANTIBIÓTICOS  ========================= */
  { name: 'Amoxicilina', aliases: ['Amoxil', 'Hiconcil'], presentations: [
    '500 mg cápsula', '875 mg comprimido revestido',
    '50 mg/mL suspensão oral 250 mg/5 mL', '500 mg/5 mL suspensão oral'
  ]},
  { name: 'Amoxicilina + clavulanato', aliases: ['Clavulin', 'Sigma clav'], presentations: [
    '500 + 125 mg comprimido revestido',
    '875 + 125 mg comprimido revestido',
    '250 + 62,5 mg/5 mL suspensão oral', '400 + 57 mg/5 mL suspensão oral',
    '600 mg pó para solução injetável', '1,2 g pó para solução injetável'
  ]},
  { name: 'Cefalexina', aliases: ['Keflex'], presentations: [
    '500 mg cápsula', '500 mg/5 mL suspensão oral'
  ]},
  { name: 'Cefuroxima', aliases: ['Zinacef', 'Zinnat'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '250 mg/5 mL suspensão oral', '750 mg pó injetável', '1,5 g pó injetável'
  ]},
  { name: 'Ceftriaxona', aliases: ['Rocefin'], presentations: [
    '500 mg pó injetável', '1 g pó injetável', '2 g pó injetável'
  ]},
  { name: 'Cefepime', aliases: ['Maxcef'], presentations: ['1 g pó injetável', '2 g pó injetável'] },
  { name: 'Azitromicina', aliases: ['Zitromax', 'Astro', 'Zitrofar'], presentations: [
    '500 mg comprimido revestido',
    '40 mg/mL suspensão oral 200 mg/5 mL',
    '500 mg pó liofilizado para solução injetável'
  ]},
  { name: 'Claritromicina', aliases: ['Klaricid', 'Clamicin'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '500 mg comprimido UD',
    '50 mg/mL suspensão oral'
  ]},
  { name: 'Eritromicina', aliases: ['Pantomicina'], presentations: [
    '500 mg comprimido revestido', '50 mg/mL suspensão oral'
  ]},
  { name: 'Ciprofloxacino', aliases: ['Cipro', 'Floxan', 'Ciflox'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido', '750 mg comprimido revestido',
    '2 mg/mL solução para infusão IV (frasco 100 mL)', '2 mg/mL solução para infusão IV (frasco 200 mL)'
  ]},
  { name: 'Levofloxacino', aliases: ['Levaquin', 'Tavanic'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido', '750 mg comprimido revestido',
    '5 mg/mL solução para infusão IV'
  ]},
  { name: 'Moxifloxacino', aliases: ['Avalox'], presentations: [
    '400 mg comprimido revestido', '400 mg/250 mL solução para infusão IV'
  ]},
  { name: 'Norfloxacino', aliases: ['Floxacin'], presentations: ['400 mg comprimido revestido'] },
  { name: 'Sulfametoxazol + trimetoprima', aliases: ['Bactrim', 'Bactrim F'], presentations: [
    '400 + 80 mg comprimido', '800 + 160 mg comprimido (F)',
    '40 + 8 mg/mL suspensão oral', '400 + 80 mg/5 mL solução injetável'
  ]},
  { name: 'Doxiciclina', aliases: ['Vibramicina'], presentations: [
    '100 mg comprimido revestido', '100 mg cápsula'
  ]},
  { name: 'Metronidazol', aliases: ['Flagyl'], presentations: [
    '250 mg comprimido', '400 mg comprimido', '40 mg/mL suspensão oral',
    '5 mg/mL solução para infusão IV (frasco 100 mL)'
  ]},
  { name: 'Nistatina', aliases: ['Micostatin'], presentations: [
    '100.000 UI/mL suspensão oral'
  ]},
  { name: 'Fluconazol', aliases: ['Zoltec', 'Florcoral'], presentations: [
    '100 mg cápsula', '150 mg cápsula', '2 mg/mL solução para infusão IV'
  ]},

  /* =========================  RESPIRATÓRIO / ALERGIA  ========================= */
  { name: 'Salbutamol', aliases: ['Aerolin'], presentations: [
    '100 mcg/dose aerossol oral', '5 mg/mL solução para nebulização',
    '2 mg/5 mL xarope'
  ]},
  { name: 'Formoterol + budesonida', aliases: ['Symbicort'], presentations: [
    '6 + 100 mcg/dose pó inalatório', '6 + 200 mcg/dose pó inalatório', '12 + 400 mcg/dose'
  ]},
  { name: 'Salmeterol + fluticasona', aliases: ['Seretide'], presentations: [
    '50 + 100 mcg/dose Diskus', '50 + 250 mcg/dose Diskus', '50 + 500 mcg/dose Diskus',
    '25 + 50 mcg/dose aerossol', '25 + 125 mcg/dose aerossol', '25 + 250 mcg/dose aerossol'
  ]},
  { name: 'Brometo de tiotrópio', aliases: ['Spiriva'], presentations: [
    '18 mcg/dose pó inalatório (HandiHaler)', '2,5 mcg/dose Respimat'
  ]},
  { name: 'Brometo de ipratrópio', aliases: ['Atrovent'], presentations: [
    '0,25 mg/mL gotas para nebulização', '20 mcg/dose aerossol oral'
  ]},
  { name: 'Beclometasona', aliases: ['Clenil', 'Beclosol'], presentations: [
    '50 mcg/dose aerossol oral', '250 mcg/dose aerossol oral', '400 mcg cápsula'
  ]},
  { name: 'Budesonida', aliases: ['Pulmicort', 'Busonid'], presentations: [
    '0,25 mg/mL suspensão para nebulização', '0,5 mg/mL suspensão para nebulização',
    '100 mcg/dose pó inalatório', '200 mcg/dose pó inalatório'
  ]},
  { name: 'Montelucaste', aliases: ['Singulair', 'Montelair'], presentations: [
    '4 mg comprimido mastigável', '5 mg comprimido mastigável', '10 mg comprimido revestido'
  ]},
  { name: 'Loratadina', aliases: ['Claritin'], presentations: [
    '10 mg comprimido', '1 mg/mL xarope'
  ]},
  { name: 'Desloratadina', aliases: ['Desalex'], presentations: [
    '5 mg comprimido revestido', '0,5 mg/mL xarope'
  ]},
  { name: 'Cetirizina', aliases: ['Zyrtec'], presentations: [
    '10 mg comprimido revestido', '1 mg/mL solução oral'
  ]},
  { name: 'Levocetirizina', aliases: ['Zyxem'], presentations: [
    '5 mg comprimido revestido', '0,5 mg/mL solução oral'
  ]},
  { name: 'Fexofenadina', aliases: ['Allegra'], presentations: [
    '60 mg comprimido revestido', '120 mg comprimido revestido', '180 mg comprimido revestido',
    '6 mg/mL suspensão oral'
  ]},

  /* =========================  CORTICOIDES  ========================= */
  { name: 'Prednisona', aliases: ['Meticorten'], presentations: [
    '5 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Prednisolona', aliases: ['Predsim'], presentations: [
    '5 mg comprimido', '20 mg comprimido', '3 mg/mL solução oral'
  ]},
  { name: 'Dexametasona', aliases: ['Decadron'], presentations: [
    '0,5 mg comprimido', '4 mg comprimido', '0,1 mg/mL elixir',
    '4 mg/mL solução injetável (ampola 2,5 mL)'
  ]},
  { name: 'Metilprednisolona', aliases: ['Solu-Medrol', 'Depo-Medrol'], presentations: [
    '4 mg comprimido', '125 mg pó injetável', '500 mg pó injetável', '1 g pó injetável',
    '40 mg/mL suspensão injetável depo'
  ]},
  { name: 'Hidrocortisona', aliases: ['Solu-Cortef'], presentations: [
    '100 mg pó injetável', '500 mg pó injetável'
  ]},

  /* =========================  UROLOGIA / PRÓSTATA  ========================= */
  { name: 'Tansulosina', aliases: ['Secotex'], presentations: ['0,4 mg cápsula de liberação prolongada'] },
  { name: 'Alfuzosina', aliases: ['Xatral OD'], presentations: ['10 mg comprimido OD'] },
  { name: 'Dutasterida', aliases: ['Avodart'], presentations: ['0,5 mg cápsula gelatinosa'] },
  { name: 'Finasterida', aliases: ['Proscar', 'Propecia'], presentations: ['1 mg comprimido', '5 mg comprimido'] },
  { name: 'Sildenafila', aliases: ['Viagra'], presentations: ['25 mg comprimido', '50 mg comprimido', '100 mg comprimido'] },
  { name: 'Tadalafila', aliases: ['Cialis'], presentations: ['2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'] },
  { name: 'Solifenacina', aliases: ['Vesicare'], presentations: ['5 mg comprimido revestido', '10 mg comprimido revestido'] },
  { name: 'Oxibutinina', aliases: ['Retemic'], presentations: ['5 mg comprimido', '10 mg comprimido OXR'] },
  { name: 'Mirabegrona', aliases: ['Betmiga'], presentations: ['25 mg comprimido', '50 mg comprimido'] },

  /* =========================  GINECO  ========================= */
  { name: 'Estradiol', aliases: ['Estreva', 'Estrofem'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '0,06% gel transdérmico'
  ]},
  { name: 'Tibolona', aliases: ['Livial'], presentations: ['2,5 mg comprimido'] },
  { name: 'Acetato de medroxiprogesterona', aliases: ['Depo-Provera', 'Provera'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '150 mg/mL suspensão injetável'
  ]},

  /* =========================  VITAMINAS / SUPLEMENTOS  ========================= */
  { name: 'Vitamina D3 (colecalciferol)', aliases: ['Addera D3', 'Depura'], presentations: [
    '1.000 UI comprimido', '2.000 UI comprimido', '7.000 UI comprimido',
    '50.000 UI comprimido', '200 UI/gota solução oral'
  ]},
  { name: 'Vitamina B12 (cianocobalamina)', aliases: ['Cobavital'], presentations: ['5.000 mcg/mL solução injetável', '5000 mcg comprimido'] },
  { name: 'Vitamina B12 (Mecobalamina)', aliases: ['Dozemast', 'Mecobe'], presentations: ['1000 mcg cp sublingual'] },
  { name: 'Ácido fólico', aliases: ['Endofolin', 'Folacin'], presentations: ['5 mg comprimido', '0,2 mg/mL solução oral'] },
  { name: 'Vitamina B1 (tiamina)', aliases: ['Benerva'], presentations: ['100 mg comprimido', '300 mg comprimido'] },
  { name: 'Vitamina B6 (piridoxina)', aliases: ['Vitabe'], presentations: ['50 mg comprimido'] },
  { name: 'Complexo B', aliases: ['Citoneurin'], presentations: [
    'comprimido revestido (B1+B6+B12)', 'solução injetável (Citoneurin 5000 ampola)'
  ]},
  { name: 'Carbonato de cálcio + vitamina D3', aliases: ['Caltrate D3', 'Os-Cal'], presentations: [
    '600 mg + 400 UI comprimido', '500 mg + 800 UI comprimido'
  ]},
  { name: 'Sulfato ferroso', aliases: ['Noripurum oral', 'Sulfato ferroso 40 mg'], presentations: [
    '40 mg comprimido', '125 mg/5 mL xarope', '25 mg/mL solução oral'
  ]},
  { name: 'Coenzima Q10', aliases: ['Ubiquinona'], presentations: ['30 mg cápsula', '50 mg cápsula', '100 mg cápsula'] },

  /* =========================  OFTALMOLÓGICOS de uso neuro  ========================= */
  { name: 'Latanoprosta', aliases: ['Xalatan'], presentations: ['0,005% colírio (frasco 2,5 mL)'] },
  { name: 'Timolol', aliases: ['Timoptol'], presentations: ['0,25% colírio', '0,5% colírio'] },

  /* =========================  ALCOOLISMO / CESSAÇÃO  ========================= */
  { name: 'Naltrexona', aliases: ['Revia', 'Vivitrol'], presentations: ['50 mg comprimido revestido'] },
  { name: 'Acamprosato', aliases: ['Campral'], presentations: ['333 mg comprimido revestido gastrorresistente'] },
  { name: 'Vareniclina', aliases: ['Champix'], presentations: ['0,5 mg comprimido revestido', '1 mg comprimido revestido'] },

  /* =========================  REUMATO/IMUNO selecionados  ========================= */
  { name: 'Metotrexato', aliases: ['Tecnomet', 'Methotrexate'], presentations: [
    '2,5 mg comprimido', '25 mg/mL solução injetável (ampola 2 mL)',
    '50 mg/mL solução injetável (frasco)', 'caneta SC pré-cheia (Metoject)'
  ]},
  { name: 'Hidroxicloroquina', aliases: ['Plaquinol', 'Reuquinol'], presentations: ['400 mg comprimido revestido'] },
  { name: 'Leflunomida', aliases: ['Arava'], presentations: ['20 mg comprimido revestido'] },
  { name: 'Sulfasalazina', aliases: ['Azulfin'], presentations: ['500 mg comprimido revestido'] },
  { name: 'Colchicina', aliases: ['Colchicin'], presentations: ['0,5 mg comprimido', '1 mg comprimido'] },
  { name: 'Alopurinol', aliases: ['Zyloric'], presentations: ['100 mg comprimido', '300 mg comprimido'] },

  /* =========================  PSIQUIATRIA — outros  ========================= */
  { name: 'Lítio (carbonato)', aliases: ['Carbolitium', 'Carbolitium CR'], presentations: [
    '300 mg comprimido', '450 mg comprimido CR'
  ]},
  { name: 'Metilfenidato', aliases: ['Ritalina', 'Ritalina LA', 'Concerta'], presentations: [
    '10 mg comprimido', '10 mg cápsula LA', '20 mg cápsula LA',
    '30 mg cápsula LA', '40 mg cápsula LA',
    '18 mg comprimido OROS (Concerta)', '36 mg comprimido OROS', '54 mg comprimido OROS'
  ]},
  { name: 'Lisdexanfetamina', aliases: ['Venvanse'], presentations: [
    '30 mg cápsula', '50 mg cápsula', '70 mg cápsula'
  ]},
  { name: 'Atomoxetina', aliases: ['Strattera'], presentations: [
    '10 mg cápsula', '18 mg cápsula', '25 mg cápsula', '40 mg cápsula',
    '60 mg cápsula', '80 mg cápsula'
  ]},

  /* =========================  TÓPICOS / DIVERSOS úteis em prescrição neuro/clinica  ========================= */
  { name: 'Lidocaína', aliases: ['Xylocaína', 'Versatis'], presentations: [
    '5% adesivo dérmico (Versatis)', '2% gel', '2% spray',
    '1% solução injetável', '2% solução injetável'
  ]},
  { name: 'Diclofenaco gel tópico', aliases: ['Voltaren Emulgel', 'Cataflam Pro'], presentations: [
    '10 mg/g gel (1%)', '23,2 mg/g gel'
  ]},
  { name: 'Cetoconazol', aliases: ['Nizoral'], presentations: [
    '200 mg comprimido', '2% xampu', '2% creme dérmico'
  ]},
];

/* Mapa rápido por nome em minúsculas (e por alias) → entry */
window.MED_INDEX = (() => {
  const map = new Map();
  for (const m of window.MEDICATIONS) {
    map.set(m.name.toLowerCase(), m);
    for (const a of (m.aliases || [])) map.set(a.toLowerCase(), m);
  }
  return map;
})();

/* ===========================================================
   POSOLOGIAS — modelos editáveis para o receituário

   Fontes de referência para conferência clínica:
   - Bulário Eletrônico Anvisa, Bula do Profissional:
     https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico
   - Perguntas e respostas Anvisa sobre bulas:
     https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/bulas-e-rotulos/perguntas-e-respostas-sobre-bulas
   - PCDT/CONITEC quando aplicável:
     https://www.gov.br/conitec/pt-br
=========================================================== */
window.MED_POSOLOGY_SOURCES = [
  {
    label: 'Bulário Eletrônico Anvisa - Bula do Profissional',
    url: 'https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico'
  },
  {
    label: 'PCDT/CONITEC, quando aplicável',
    url: 'https://www.gov.br/conitec/pt-br'
  }
];

const MED_POSOLOGY_UTILS = (() => {
  const norm = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const has = (text, terms) => {
    const n = norm(text);
    return terms.some(term => n.includes(norm(term)));
  };

  const uniq = values => {
    const seen = new Set();
    const out = [];
    for (const value of values.flat().filter(Boolean)) {
      const key = norm(value).replace(/\s+/g, ' ').trim();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(value);
      }
    }
    return out;
  };

  const oralUnit = presentation => {
    const p = norm(presentation);
    if (p.includes('gotas')) return 'dose em gotas';
    if (p.includes('xarope') || p.includes('suspensao oral') || p.includes('solucao oral') || p.includes('elixir')) return 'dose';
    if (p.includes('capsula')) return 'cápsula';
    if (p.includes('dragea')) return 'drágea';
    if (p.includes('sache')) return 'sachê';
    if (p.includes('orodispersivel')) return 'comprimido orodispersível';
    if (p.includes('sublingual')) return 'comprimido sublingual';
    return 'comprimido';
  };

  const presentationKind = presentation => {
    const p = norm(presentation);
    if (!p) return 'unknown';
    if (p.includes('intratecal')) return 'intrathecal';
    if (p.includes('colirio')) return 'eye';
    if (p.includes('xampu')) return 'shampoo';
    if (p.includes('adesivo transdermico')) return 'patch';
    if (p.includes('creme') || p.includes('gel') || p.includes('dermico')) return 'topical';
    if (p.includes('spray nasal')) return 'nasal';
    if (p.includes('aerossol') || p.includes('inalatorio') || p.includes('respimat') || p.includes('diskus') || p.includes('nebulizacao')) return 'inhaled';
    if (p.includes('infusao') || p.includes(' iv') || p.includes('iv/')) return 'iv';
    if (p.includes(' injet') || p.includes('injetavel') || p.includes('ampola') || p.includes('po liofilizado') || p.includes('frasco-ampola') || p.includes('seringa') || p.includes('caneta')) {
      if (p.includes(' sc') || p.includes('subcut') || p.includes('seringa') || p.includes('caneta')) return 'sc';
      if (p.includes(' im') || p.includes('intramuscular')) return 'im';
      return 'injectable';
    }
    if (p.includes('gotas') || p.includes('xarope') || p.includes('suspensao oral') || p.includes('solucao oral') || p.includes('elixir')) return 'oral-liquid';
    if (p.includes('comprimido') || p.includes('capsula') || p.includes('dragea') || p.includes('sache') || p.includes('po para suspensao') || p.includes(' xro') || p.includes(' cr') || p.includes(' er') || p.includes(' mr') || p.includes('retard')) return 'oral-solid';
    return 'unknown';
  };

  const byPresentation = presentation => {
    const kind = presentationKind(presentation);
    const unit = oralUnit(presentation);
    const p = norm(presentation);

    if (kind === 'oral-solid') {
      return [
        `Tomar 1 ${unit} VO 1 vez ao dia.`,
        `Tomar 1 ${unit} VO de 12/12 horas.`,
        `Tomar 1 ${unit} VO de 8/8 horas, por ___ dias.`,
        `Tomar 1 ${unit} VO se necessário, respeitando a dose máxima diária da bula.`,
        `Iniciar com 1 ${unit} VO à noite e titular conforme resposta e tolerância.`
      ];
    }
    if (kind === 'oral-liquid') {
      const unitLiquid = p.includes('gotas') ? '___ gotas' : '___ mL';
      return [
        `Tomar ${unitLiquid} VO 1 vez ao dia.`,
        `Tomar ${unitLiquid} VO de 12/12 horas.`,
        `Tomar ${unitLiquid} VO de 8/8 horas, por ___ dias.`,
        `Tomar ${unitLiquid} VO se necessário, respeitando a dose máxima diária da bula.`,
        `Tomar ___ mg/kg/dose VO a cada ___ horas, conforme peso e bula.`
      ];
    }
    if (kind === 'sc') {
      return [
        'Aplicar ___ dose por via subcutânea 1 vez ao dia.',
        'Aplicar ___ dose por via subcutânea 1 vez por semana.',
        'Aplicar ___ dose por via subcutânea 1 vez ao mês.',
        'Aplicar conforme esquema de titulação e orientação médica.'
      ];
    }
    if (kind === 'im') {
      return [
        'Aplicar 1 ampola por via intramuscular, conforme indicação.',
        'Aplicar por via intramuscular a cada ___ horas/dias, conforme bula.',
        'Administrar em serviço de saúde, conforme diluição e técnica recomendadas.'
      ];
    }
    if (kind === 'iv') {
      return [
        'Administrar por via intravenosa conforme diluição e tempo de infusão da bula.',
        'Infundir por via intravenosa a cada ___ horas/dias, conforme protocolo.',
        'Uso em serviço de saúde; monitorar durante e após a infusão conforme bula.'
      ];
    }
    if (kind === 'injectable') {
      return [
        'Administrar por via injetável conforme via, diluição e tempo de aplicação da bula.',
        'Aplicar 1 ampola conforme prescrição médica e protocolo do serviço.',
        'Uso em serviço de saúde; ajustar dose conforme indicação clínica.'
      ];
    }
    if (kind === 'inhaled') {
      if (p.includes('nebulizacao')) {
        return [
          'Nebulizar ___ mL/dose de 6/6 horas se necessário.',
          'Nebulizar ___ mL/dose de 8/8 ou 12/12 horas, conforme indicação.',
          'Usar em nebulização conforme diluição recomendada em bula.'
        ];
      }
      return [
        'Inalar 1 jato/dose de 12/12 horas.',
        'Inalar 2 jatos/doses de 12/12 horas.',
        'Inalar 1 a 2 jatos/doses de 4/4 a 6/6 horas se necessário.',
        'Usar conforme plano terapêutico e técnica inalatória orientada.'
      ];
    }
    if (kind === 'nasal') {
      return [
        'Aplicar 1 jato em uma narina no início dos sintomas; repetir conforme bula se necessário.',
        'Aplicar 1 jato em cada narina 1 vez ao dia.',
        'Aplicar conforme orientação médica, respeitando intervalo mínimo e dose máxima.'
      ];
    }
    if (kind === 'patch') {
      return [
        'Aplicar 1 adesivo na pele, trocar a cada 24 horas.',
        'Aplicar 1 adesivo na pele, trocar a cada 72 horas.',
        'Retirar o adesivo anterior antes de aplicar o novo; alternar locais de aplicação.'
      ];
    }
    if (kind === 'topical') {
      return [
        'Aplicar fina camada no local afetado 1 vez ao dia.',
        'Aplicar fina camada no local afetado de 12/12 horas.',
        'Aplicar no local afetado de 8/8 horas se necessário, por ___ dias.'
      ];
    }
    if (kind === 'shampoo') {
      return [
        'Aplicar no couro cabeludo, deixar agir por ___ minutos e enxaguar, ___ vezes por semana.',
        'Usar no banho em dias alternados por ___ semanas.'
      ];
    }
    if (kind === 'eye') {
      return [
        'Instilar 1 gota no(s) olho(s) afetado(s) 1 vez ao dia.',
        'Instilar 1 gota no(s) olho(s) afetado(s) de 12/12 horas.',
        'Instilar conforme prescrição oftalmológica.'
      ];
    }
    if (kind === 'intrathecal') {
      return [
        'Uso intratecal por bomba/programação especializada, conforme protocolo.',
        'Ajustar por titulação em serviço especializado.'
      ];
    }
    return [
      'Usar conforme posologia definida para a indicação clínica e bula vigente.',
      'Ajustar dose, intervalo e duração conforme resposta, tolerância e função renal/hepática.',
      'Completar: dose ___, via ___, intervalo ___, duração ___.'
    ];
  };

  return { norm, has, uniq, oralUnit, presentationKind, byPresentation };
})();

function medicationClassPosologies(med, presentation) {
  const { norm, has, oralUnit, presentationKind } = MED_POSOLOGY_UTILS;
  const name = med?.name || '';
  const p = norm(presentation);
  const kind = presentationKind(presentation);
  const unit = oralUnit(presentation);
  const out = [];

  const add = (...items) => out.push(...items);

  if (has(name, ['sumatriptano', 'zolmitriptano', 'naratriptano', 'rizatriptano', 'eletriptano'])) {
    if (kind === 'nasal') add('Aplicar 1 jato intranasal no início da crise; repetir conforme bula se necessário.');
    else if (kind === 'sc') add('Aplicar 1 dose SC no início da crise; repetir conforme bula se necessário.');
    else add(`Tomar 1 ${unit} VO no início da crise; repetir uma vez após 2 horas se necessário, respeitando máximo diário da bula.`);
    add('Usar apenas para crise de enxaqueca, evitando uso excessivo de medicação sintomática.');
  }

  if (has(name, ['erenumabe'])) add('Aplicar 70 mg SC 1 vez ao mês.', 'Aplicar 140 mg SC 1 vez ao mês.');
  if (has(name, ['galcanezumabe'])) add('Enxaqueca: aplicar 240 mg SC no primeiro mês; depois 120 mg SC 1 vez ao mês.', 'Cefaleia em salvas: aplicar conforme indicação e bula vigente.');
  if (has(name, ['fremanezumabe'])) add('Aplicar 225 mg SC 1 vez ao mês.', 'Aplicar 675 mg SC a cada 3 meses.');
  if (has(name, ['toxina botulinica'])) add('Aplicar conforme protocolo PREEMPT para enxaqueca crônica, em pontos padronizados.', 'Procedimento em consultório; registrar lote, diluição, unidades totais e pontos aplicados.');

  if (has(name, ['acido valproico', 'divalproato', 'brivaracetam', 'carbamazepina', 'clobazam', 'clonazepam', 'etossuximida', 'fenitoina', 'fenobarbital', 'gabapentina', 'lacosamida', 'lamotrigina', 'levetiracetam', 'oxcarbazepina', 'perampanel', 'pregabalina', 'primidona', 'topiramato', 'vigabatrina', 'zonisamida'])) {
    add(`Tomar 1 ${unit} VO de 12/12 horas, com titulação conforme resposta e tolerância.`);
    add(`Tomar 1 ${unit} VO à noite por ___ dias; depois ajustar conforme esquema de titulação.`);
    add('Manter uso contínuo nos horários prescritos; não suspender abruptamente.');
  }

  if (has(name, ['amitriptilina', 'nortriptilina', 'imipramina', 'clomipramina', 'mirtazapina', 'trazodona', 'agomelatina'])) {
    add(`Tomar 1 ${unit} VO à noite.`);
    add(`Iniciar com 1 ${unit} VO à noite e reavaliar titulação em ___ semanas.`);
  }
  if (has(name, ['sertralina', 'fluoxetina', 'paroxetina', 'citalopram', 'escitalopram', 'venlafaxina', 'desvenlafaxina', 'duloxetina', 'bupropiona', 'vortioxetina'])) {
    add(`Tomar 1 ${unit} VO pela manhã.`);
    add(`Tomar 1 ${unit} VO 1 vez ao dia, no mesmo horário.`);
    add('Reavaliar resposta e tolerabilidade em 2 a 4 semanas.');
  }
  if (has(name, ['alprazolam', 'diazepam', 'lorazepam', 'bromazepam', 'midazolam', 'zolpidem', 'eszopiclona'])) {
    add(`Tomar 1 ${unit} VO à noite se necessário.`);
    add(`Usar a menor dose efetiva pelo menor tempo necessário; evitar álcool e dirigir.`);
  }
  if (has(name, ['buspirona'])) add(`Tomar 1 ${unit} VO de 12/12 horas.`, `Tomar 1 ${unit} VO de 8/8 horas.`);
  if (has(name, ['hidroxizina'])) add(`Tomar 1 ${unit} VO à noite se prurido/ansiedade.`, `Tomar 1 ${unit} VO de 8/8 horas se necessário.`);
  if (has(name, ['melatonina'])) add(`Tomar 1 ${unit} VO 30 a 60 minutos antes de dormir.`);

  if (has(name, ['haloperidol', 'risperidona', 'quetiapina', 'olanzapina', 'aripiprazol', 'clozapina', 'ziprasidona', 'periciazina', 'levomepromazina', 'tioridazina', 'lurasidona'])) {
    if (kind === 'injectable' || kind === 'im') add('Aplicar conforme formulação e intervalo da bula; monitorar efeitos extrapiramidais/sedação.');
    add(`Tomar 1 ${unit} VO à noite, com titulação conforme resposta e tolerância.`);
    add(`Tomar 1 ${unit} VO 1 vez ao dia, preferencialmente no mesmo horário.`);
  }

  if (has(name, ['levodopa'])) add(`Tomar 1 ${unit} VO de 6/6 ou 8/8 horas, conforme flutuações motoras.`, 'Tomar longe de refeição hiperproteica quando houver perda de efeito.');
  if (has(name, ['pramipexol', 'ropinirol', 'amantadina', 'selegilina', 'rasagilina', 'entacapona', 'biperideno', 'triexifenidil', 'safinamida', 'tetrabenazina'])) add(`Tomar 1 ${unit} VO 1 vez ao dia, titular conforme resposta e tolerância.`, `Tomar 1 ${unit} VO de 12/12 horas, conforme indicação.`);
  if (has(name, ['rotigotina'])) add('Aplicar 1 adesivo transdérmico a cada 24 horas, alternando locais de aplicação.');

  if (has(name, ['donepezila'])) add(`Tomar 1 ${unit} VO à noite.`, `Tomar 1 ${unit} VO 1 vez ao dia.`);
  if (has(name, ['rivastigmina'])) {
    if (kind === 'patch') add('Aplicar 1 adesivo a cada 24 horas, alternando locais de aplicação.');
    else add(`Tomar 1 ${unit} VO de 12/12 horas, com alimento.`);
  }
  if (has(name, ['galantamina', 'memantina'])) add(`Tomar 1 ${unit} VO 1 vez ao dia, titular conforme bula.`, `Tomar 1 ${unit} VO de 12/12 horas, conforme apresentação e dose-alvo.`);

  if (has(name, ['Betainterferona 1a'])) add('Avonex: aplicar 30 mcg IM 1 vez por semana.', 'Rebif: aplicar por via SC 3 vezes por semana, conforme dose prescrita.');
  if (has(name, ['interferona beta-1b'])) add('Aplicar por via SC em dias alternados, conforme bula.');
  if (has(name, ['acetato de glatiramer'])) add('Aplicar 20 mg SC 1 vez ao dia.', 'Aplicar 40 mg SC 3 vezes por semana.');
  if (has(name, ['fingolimode', 'teriflunomida'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
  if (has(name, ['Fumarato de dimetila'])) add(`Tomar 1 ${unit} VO de 12/12 horas, com alimento, não abrir ou mastigar.`);
  if (has(name, ['natalizumabe'])) add('Infundir 300 mg IV a cada 4 semanas, em serviço habilitado.');
  if (has(name, ['ocrelizumabe'])) add('Infundir 300 mg IV no dia 1 e dia 15; depois 600 mg IV a cada 6 meses, conforme protocolo.');
  if (has(name, ['cladribina'])) add('Administrar VO em ciclos anuais conforme peso e protocolo específico.');

  if (has(name, ['baclofeno', 'tizanidina', 'ciclobenzaprina'])) add(`Tomar 1 ${unit} VO à noite.`, `Tomar 1 ${unit} VO de 8/8 ou 12/12 horas, conforme resposta e sedação.`);
  if (has(name, ['carisoprodol'])) add(`Tomar 1 ${unit} VO de 8/8 horas, por curto período.`);

  if (has(name, ['betaistina'])) add(`Tomar 1 ${unit} VO de 8/8 ou 12/12 horas.`);
  if (has(name, ['dimenidrinato', 'meclizina', 'prometazina', 'ondansetrona', 'metoclopramida', 'bromoprida'])) {
    if (['iv', 'im', 'injectable'].includes(kind)) add('Administrar 1 ampola por via IV/IM conforme indicação, intervalo e bula.');
    else add(`Tomar 1 ${unit} VO de 8/8 horas se náuseas/vertigem.`);
    add('Usar se necessário, respeitando intervalo mínimo e dose máxima da bula.');
  }

  if (has(name, ['captopril'])) add(`Tomar 1 ${unit} VO de 8/8 ou 12/12 horas.`, `Tomar 1 ${unit} VO se PA elevada, conforme plano individual.`);
  if (has(name, ['enalapril', 'ramipril', 'lisinopril', 'perindopril', 'losartana', 'valsartana', 'olmesartana', 'telmisartana', 'candesartana', 'irbesartana', 'anlodipino', 'lercanidipino', 'manidipino', 'hidroclorotiazida', 'clortalidona', 'indapamida', 'espironolactona', 'bumetanida', 'nebivolol'])) {
    add(`Tomar 1 ${unit} VO pela manhã.`);
    add(`Tomar 1 ${unit} VO 1 vez ao dia, com controle pressórico e laboratorial conforme indicado.`);
  }
  if (has(name, ['nifedipino', 'verapamil', 'diltiazem', 'propranolol', 'atenolol', 'metoprolol', 'bisoprolol', 'carvedilol', 'clonidina', 'metildopa', 'hidralazina', 'doxazosina', 'prazosina'])) {
    add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
    add(`Tomar 1 ${unit} VO de 12/12 horas, conforme controle clínico.`);
  }

  if (has(name, ['acido acetilsalicilico', 'clopidogrel', 'prasugrel'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
  if (has(name, ['ticagrelor'])) add(`Tomar 1 ${unit} VO de 12/12 horas.`);
  if (has(name, ['varfarina'])) add('Tomar VO conforme dose semanal ajustada por INR; registrar esquema por dias da semana.');
  if (has(name, ['rivaroxabana', 'dabigatrana', 'apixabana', 'edoxabana'])) add(`Tomar 1 ${unit} VO conforme indicação, função renal e bula.`, 'Não interromper sem orientação; checar interações e função renal.');
  if (has(name, ['enoxaparina'])) add('Aplicar por via SC conforme peso, indicação e função renal.', 'Aplicar 1 seringa SC 1 vez ao dia conforme profilaxia prescrita.');

  if (has(name, ['sinvastatina', 'atorvastatina', 'rosuvastatina', 'pravastatina', 'pitavastatina', 'ezetimiba', 'ciprofibrato', 'fenofibrato', 'bezafibrato', 'gemfibrozila', 'omega-3'])) {
    add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
    if (has(name, ['sinvastatina', 'pravastatina'])) add(`Tomar 1 ${unit} VO à noite.`);
  }

  if (has(name, ['metformina'])) add(`Tomar 1 ${unit} VO junto às refeições.`, `Tomar 1 ${unit} VO no jantar; titular conforme tolerância gastrointestinal.`);
  if (has(name, ['glibenclamida', 'glimepirida', 'gliclazida'])) add(`Tomar 1 ${unit} VO antes do café da manhã.`, 'Orientar sinais de hipoglicemia e monitorização glicêmica.');
  if (has(name, ['sitagliptina', 'linagliptina', 'saxagliptina', 'dapagliflozina', 'empagliflozina', 'canagliflozina', 'pioglitazona'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
  if (has(name, ['vildagliptina'])) add(`Tomar 1 ${unit} VO de 12/12 horas.`, `Tomar 1 ${unit} VO 1 vez ao dia, se ajuste indicado.`);
  if (has(name, ['acarbose', 'repaglinida'])) add(`Tomar 1 ${unit} VO antes das principais refeições.`);
  if (has(name, ['liraglutida'])) add('Victoza: aplicar SC 1 vez ao dia, conforme titulação da bula.', 'Saxenda: aplicar SC 1 vez ao dia, conforme titulação semanal da bula.');
  if (has(name, ['dulaglutida'])) add('Aplicar 1 caneta SC 1 vez por semana.');
  if (has(name, ['semaglutida'])) {
    if (p.includes('rybelsus') || kind === 'oral-solid') add('Tomar 1 comprimido VO em jejum, com pouca água; aguardar 30 minutos para alimentos/outros medicamentos.');
    add('Ozempic/Wegovy: aplicar SC 1 vez por semana, conforme titulação da bula.');
  }
  if (has(name, ['tirzepatida'])) add('Aplicar 1 caneta SC 1 vez por semana, conforme titulação da bula.');
  if (has(name, ['insulina'])) add('Aplicar ___ UI SC conforme esquema individual e glicemias.', 'Aplicar ___ UI SC antes das refeições, conforme contagem de carboidratos/correção.', 'Aplicar ___ UI SC à noite ou pela manhã, conforme esquema basal.');

  if (has(name, ['levotiroxina'])) add(`Tomar 1 ${unit} VO em jejum, 30 a 60 minutos antes do café da manhã.`);
  if (has(name, ['liotironina', 'metimazol', 'propiltiouracil'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`, `Tomar 1 ${unit} VO de 8/8 ou 12/12 horas, conforme indicação.`);

  if (has(name, ['omeprazol', 'pantoprazol', 'esomeprazol', 'lansoprazol', 'rabeprazol'])) add(`Tomar 1 ${unit} VO em jejum, 30 minutos antes do café da manhã.`, `Tomar 1 ${unit} VO de 12/12 horas antes das refeições, por ___ dias.`);
  if (has(name, ['famotidina'])) add(`Tomar 1 ${unit} VO à noite.`, `Tomar 1 ${unit} VO de 12/12 horas.`);
  if (has(name, ['hidroxido de aluminio', 'hioscina', 'lactulose', 'picossulfato', 'bisacodil', 'polietilenoglicol', 'loperamida', 'simeticona'])) add('Usar conforme sintomas, intervalo e dose máxima da bula.', `Tomar 1 ${unit} VO conforme orientação, por ___ dias.`);

  if (has(name, ['paracetamol', 'dipirona', 'ibuprofeno', 'naproxeno', 'diclofenaco', 'cetoprofeno', 'cetorolaco', 'nimesulida', 'meloxicam', 'etoricoxibe', 'celecoxibe', 'tramadol', 'codeina'])) {
    if (['iv', 'im', 'injectable'].includes(kind)) {
      add('Administrar 1 ampola por via IM/IV se dor, respeitando intervalo e dose máxima da bula.');
      add('Uso injetável por curto período; reavaliar necessidade de transição para via oral.');
    } else {
      add(`Tomar 1 ${unit} VO se dor, de 6/6 a 8/8 horas, respeitando dose máxima diária.`);
      add(`Tomar 1 ${unit} VO de 12/12 horas por ___ dias, se dor/inflamação.`);
    }
  }
  if (has(name, ['morfina', 'oxicodona', 'fentanil', 'metadona'])) {
    if (kind === 'patch') add('Aplicar 1 adesivo transdérmico e trocar a cada 72 horas, conforme dose prescrita.');
    if (['iv', 'im', 'injectable'].includes(kind)) add('Administrar por via parenteral conforme plano de analgesia, monitorização e protocolo do serviço.');
    add('Usar conforme plano individual de analgesia opioide, com orientação sobre sedação, constipação e segurança.', 'Reavaliar dor, funcionalidade e eventos adversos em curto prazo.');
  }
  if (has(name, ['capsaicina'])) add('Aplicar no local doloroso conforme bula; lavar as mãos após aplicação.');

  if (has(name, ['amoxicilina', 'amoxicilina + clavulanato', 'cefalexina', 'cefuroxima', 'azitromicina', 'claritromicina', 'eritromicina', 'ciprofloxacino', 'levofloxacino', 'moxifloxacino', 'norfloxacino', 'sulfametoxazol', 'doxiciclina', 'metronidazol', 'fluconazol'])) {
    if (['iv', 'im', 'injectable'].includes(kind)) {
      add('Administrar por via IV/IM conforme dose, diluição, intervalo e tempo de infusão da bula.');
      add('Uso em serviço de saúde; definir duração conforme foco infeccioso e protocolo local.');
    } else {
      add(`Tomar 1 ${unit} VO de 12/12 horas, por ___ dias.`);
      add(`Tomar 1 ${unit} VO de 8/8 horas, por ___ dias.`);
    }
    add('Ajustar antimicrobiano à indicação, peso, função renal, cultura e protocolo local.');
  }
  if (has(name, ['ceftriaxona', 'cefepime'])) add('Administrar por via IV/IM conforme indicação, função renal e protocolo local.', 'Uso em serviço de saúde; definir diluição, tempo de infusão e duração.');
  if (has(name, ['nistatina'])) add('Bochechar e engolir ___ mL VO de 6/6 horas, por ___ dias.', 'Manter contato na cavidade oral antes de engolir.');

  if (has(name, ['salbutamol'])) {
    if (p.includes('nebulizacao')) add('Nebulizar conforme dose prescrita e diluição em soro fisiológico.', 'Nebulizar de 4/4 a 6/6 horas se falta de ar/chiado, conforme plano.');
    else add('Inalar 1 a 2 jatos de 4/4 a 6/6 horas se falta de ar/chiado.');
  }
  if (has(name, ['formoterol', 'budesonida', 'salmeterol', 'fluticasona', 'tiotropio', 'ipratropio', 'beclometasona'])) add('Inalar conforme técnica orientada e plano de asma/DPOC.', 'Inalar 1 a 2 doses de 12/12 horas, conforme apresentação.');
  if (has(name, ['montelucaste'])) add(`Tomar 1 ${unit} VO à noite.`);
  if (has(name, ['loratadina', 'desloratadina', 'cetirizina', 'levocetirizina', 'fexofenadina'])) add(`Tomar 1 ${unit} VO 1 vez ao dia se sintomas alérgicos.`);

  if (has(name, ['prednisona', 'prednisolona', 'dexametasona', 'metilprednisolona', 'hidrocortisona'])) {
    if (['iv', 'im', 'injectable'].includes(kind)) add('Administrar por via IV/IM conforme indicação, diluição e protocolo do serviço.');
    else add('Usar pela manhã, após alimento, por ___ dias, conforme indicação.');
    add('Definir necessidade de desmame conforme dose, duração e indicação.');
  }

  if (has(name, ['tansulosina', 'alfuzosina', 'dutasterida', 'finasterida', 'solifenacina', 'oxibutinina', 'mirabegrona'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`);
  if (has(name, ['sildenafila', 'tadalafila'])) add(`Tomar 1 ${unit} VO antes da atividade sexual, conforme bula e contraindicações.`, `Tomar 1 ${unit} VO 1 vez ao dia, se esquema diário indicado.`);
  if (has(name, ['estradiol', 'tibolona', 'medroxiprogesterona'])) add('Usar conforme esquema hormonal individual e contraindicações.', `Tomar 1 ${unit} VO 1 vez ao dia, se apresentação oral.`);

  if (has(name, ['vitamina d3'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`, `Tomar 1 ${unit} VO 1 vez por semana, conforme dose prescrita.`);
  if (has(name, ['vitamina b12', 'complexo b', 'Vitamina B12 (cianocobalamina)', 'Vitamina B12 (Mecobalamina)'])) add('Aplicar 1 ampola IM conforme esquema de reposição.', `Tomar 1 ${unit} VO 1 vez ao dia.`, `Tomar 1 ${unit} sublingual 1 vez ao dia.`);
  if (has(name, ['acido folico', 'vitamina b1', 'vitamina b6', 'carbonato de calcio', 'sulfato ferroso', 'coenzima q10'])) add(`Tomar 1 ${unit} VO 1 vez ao dia.`, `Tomar 1 ${unit} VO de 12/12 horas, conforme necessidade de reposição.`);

  if (has(name, ['latanoprosta'])) add('Instilar 1 gota no(s) olho(s) acometido(s) à noite.');
  if (has(name, ['timolol'])) add('Instilar 1 gota no(s) olho(s) acometido(s) de 12/12 horas.');

  if (has(name, ['naltrexona', 'acamprosato', 'vareniclina'])) add(`Tomar 1 ${unit} VO conforme esquema de titulação/posologia da bula.`, 'Associar a acompanhamento clínico e metas terapêuticas.');
  if (has(name, ['metotrexato'])) {
    if (['sc', 'im', 'injectable'].includes(kind)) add('Aplicar por via SC/IM 1 vez por semana, conforme dose prescrita.');
    add('Usar 1 vez por semana, nunca diariamente; associar ácido fólico conforme prescrição.', 'Registrar dia fixo da semana e orientar sinais de toxicidade.');
  }
  if (has(name, ['hidroxicloroquina', 'leflunomida', 'sulfasalazina', 'alopurinol'])) add(`Tomar 1 ${unit} VO 1 vez ao dia, com monitorização conforme indicação.`);
  if (has(name, ['colchicina'])) add(`Tomar 1 ${unit} VO 1 a 2 vezes ao dia, conforme indicação e tolerância gastrointestinal.`);

  if (has(name, ['litio'])) add('Tomar VO conforme esquema individual; monitorar litemia, função renal e tireoidiana.', `Tomar 1 ${unit} VO à noite ou de 12/12 horas, conforme nível sérico.`);
  if (has(name, ['metilfenidato', 'lisdexanfetamina', 'atomoxetina'])) add(`Tomar 1 ${unit} VO pela manhã.`, 'Ajustar conforme resposta, apetite, sono, pressão arterial e frequência cardíaca.');
  if (has(name, ['lidocaina'])) {
    if (['iv', 'im', 'injectable'].includes(kind)) add('Usar por infiltração/anestesia local conforme dose máxima, técnica e protocolo.');
    else add('Aplicar no local doloroso conforme apresentação e dose máxima da bula.', 'Adesivo: aplicar por até 12 horas e retirar por 12 horas.');
  }
  if (has(name, ['diclofenaco gel'])) add('Aplicar no local doloroso de 6/6 a 8/8 horas, por ___ dias.');
  if (has(name, ['cetoconazol'])) add('Usar conforme apresentação: comprimido somente com indicação específica; creme/xampu conforme local e duração.');

  return out;
}

window.getMedicationPosologyOptions = function getMedicationPosologyOptions(med, presentation = '') {
  if (!med) return [];
  const { norm, uniq, byPresentation, presentationKind } = MED_POSOLOGY_UTILS;
  const kind = presentationKind(presentation);
  const compatibleWithPresentation = option => {
    if (!presentation || kind === 'unknown') return true;
    const o = norm(option);
    const isOral = kind === 'oral-solid' || kind === 'oral-liquid';
    if (!isOral && (o.startsWith('tomar') || /\bvo\b/.test(o))) return false;
    if (kind !== 'inhaled' && (o.startsWith('inalar') || o.startsWith('nebulizar'))) return false;
    if (kind !== 'nasal' && o.includes('intranasal')) return false;
    if (kind !== 'eye' && o.startsWith('instilar')) return false;
    if (kind !== 'patch' && o.includes('adesivo')) return false;
    if (kind !== 'topical' && (o.startsWith('aplicar fina camada') || o.includes('local doloroso'))) return false;
    if (!['sc', 'im', 'iv', 'injectable', 'intrathecal'].includes(kind) && (o.includes('por via subcutanea') || o.includes(' sc ') || o.includes('intramuscular') || o.includes(' intravenosa') || o.includes('intratecal'))) return false;
    return true;
  };
  const specific = medicationClassPosologies(med, presentation).filter(compatibleWithPresentation);
  const generic = byPresentation(presentation);
  return uniq(specific.length ? specific : generic).slice(0, 14);
};

window.getMedicationPosologyHint = function getMedicationPosologyHint(med, presentation = '') {
  if (!med) return 'Escolha um medicamento para ver sugestões de posologia.';
  const total = window.getMedicationPosologyOptions(med, presentation).length;
  const scope = presentation ? 'para esta apresentação' : 'após escolher a apresentação';
  return `${total} sugest${total === 1 ? 'ão' : 'ões'} ${scope}. Conferir bula profissional/PCDT para dose máxima, contraindicações e ajustes.`;
};
