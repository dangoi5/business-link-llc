import { loc, type Loc } from "@/i18n/t";

export type LegalSection = {
  title: Loc;
  body: Loc[];
};

export const privacySections: LegalSection[] = [
  {
    title: loc("Who we are", "Quiénes somos", "Chi siamo"),
    body: [
      loc(
        "Business Link LLC (“Business Link,” “we,” “us”) is a master distributor and exporter of food products. This Privacy Policy explains how we handle information when you use businesslinkgroup.com and related pages (the “Site”).",
        "Business Link LLC (“Business Link”, “nosotros”) es un distribuidor maestro y exportador de alimentos. Esta Política de Privacidad explica cómo tratamos la información cuando usa businesslinkgroup.com y páginas relacionadas (el “Sitio”).",
        "Business Link LLC (“Business Link”, “noi”) è un distributore master ed esportatore di prodotti alimentari. La presente Informativa sulla privacy spiega come trattiamo le informazioni quando utilizza businesslinkgroup.com e le pagine correlate (il “Sito”).",
      ),
    ],
  },
  {
    title: loc("Information we collect", "Información que recopilamos", "Informazioni che raccogliamo"),
    body: [
      loc(
        "Contact inquiries: when you submit the contact form, we collect the details you provide (such as name, email, organization, phone, product interest, destination market, volume and message).",
        "Consultas de contacto: al enviar el formulario, recopilamos los datos que usted proporciona (nombre, correo, organización, teléfono, producto de interés, mercado de destino, volumen y mensaje).",
        "Richieste di contatto: inviando il modulo, raccogliamo i dati che fornisce (nome, e-mail, organizzazione, telefono, prodotto di interesse, mercato di destinazione, volume e messaggio).",
      ),
      loc(
        "Technical and localization data: we may process IP-derived country information and a language preference cookie (NEXT_LOCALE) so the Site can open in English, Spanish or Italian. We do not use this for advertising profiles.",
        "Datos técnicos y de idioma: podemos tratar el país derivado de la IP y una cookie de preferencia de idioma (NEXT_LOCALE) para abrir el Sitio en inglés, español o italiano. No usamos esto para perfiles publicitarios.",
        "Dati tecnici e di lingua: possiamo trattare il Paese derivato dall’IP e un cookie di preferenza linguistica (NEXT_LOCALE) per aprire il Sito in inglese, spagnolo o italiano. Non li usiamo per profili pubblicitari.",
      ),
    ],
  },
  {
    title: loc("How we use information", "Cómo usamos la información", "Come usiamo le informazioni"),
    body: [
      loc(
        "We use contact details to evaluate commercial opportunities, respond to inquiries and follow up on distribution or export discussions. We use localization data only to present the Site in an appropriate language.",
        "Usamos los datos de contacto para evaluar oportunidades comerciales, responder consultas y dar seguimiento a conversaciones de distribución o exportación. Usamos los datos de idioma solo para mostrar el Sitio en el idioma adecuado.",
        "Utilizziamo i dati di contatto per valutare opportunità commerciali, rispondere alle richieste e dare seguito a discussioni di distribuzione o esportazione. Usiamo i dati di lingua solo per presentare il Sito nella lingua appropriata.",
      ),
    ],
  },
  {
    title: loc("Sharing", "Compartición", "Condivisione"),
    body: [
      loc(
        "Inquiry emails are sent through our email delivery provider (Resend) to our business inbox (currently info@businesslinkgroup.com). We do not sell your personal information. We may share information with service providers who help us operate the Site or with advisors when required by law.",
        "Los correos de consulta se envían mediante nuestro proveedor de correo (Resend) a nuestra bandeja comercial (actualmente info@businesslinkgroup.com). No vendemos su información personal. Podemos compartirla con proveedores que nos ayudan a operar el Sitio o con asesores cuando lo exija la ley.",
        "Le e-mail di richiesta sono inviate tramite il nostro fornitore di posta (Resend) alla nostra casella commerciale (attualmente info@businesslinkgroup.com). Non vendiamo i Suoi dati personali. Possiamo condividerli con fornitori che ci aiutano a gestire il Sito o con consulenti quando richiesto dalla legge.",
      ),
    ],
  },
  {
    title: loc("Retention", "Conservación", "Conservazione"),
    body: [
      loc(
        "We keep inquiry records for as long as needed to manage the commercial relationship or as required by law, then delete or anonymize them when no longer needed.",
        "Conservamos los registros de consultas el tiempo necesario para gestionar la relación comercial o según lo exija la ley; luego los eliminamos o anonimizamos cuando ya no sean necesarios.",
        "Conserviamo i registri delle richieste per il tempo necessario a gestire il rapporto commerciale o come richiesto dalla legge; poi li eliminiamo o anonimizziamo quando non sono più necessari.",
      ),
    ],
  },
  {
    title: loc("Your choices", "Sus opciones", "Le Sue scelte"),
    body: [
      loc(
        "You may request access, correction or deletion of inquiry data by emailing info@businesslinkgroup.com. You can change language at any time with the Site language menu (this updates the NEXT_LOCALE cookie).",
        "Puede solicitar acceso, corrección o eliminación de datos de consulta escribiendo a info@businesslinkgroup.com. Puede cambiar el idioma en cualquier momento con el menú del Sitio (esto actualiza la cookie NEXT_LOCALE).",
        "Può richiedere accesso, correzione o cancellazione dei dati di richiesta scrivendo a info@businesslinkgroup.com. Può cambiare lingua in qualsiasi momento dal menu del Sito (questo aggiorna il cookie NEXT_LOCALE).",
      ),
    ],
  },
  {
    title: loc("Contact", "Contacto", "Contatti"),
    body: [
      loc(
        "Questions about this policy: info@businesslinkgroup.com.",
        "Preguntas sobre esta política: info@businesslinkgroup.com.",
        "Domande su questa informativa: info@businesslinkgroup.com.",
      ),
    ],
  },
];

export const termsIntro = loc(
  "By visiting and using this website (businesslinkgroup.com, the “Site”), operated by Business Link LLC (“Business Link,” “we,” “us”), you are deemed to have accepted the terms below. If you do not accept these terms, please do not use the Site.",
  "Al visitar y usar este sitio web (businesslinkgroup.com, el “Sitio”), operado por Business Link LLC (“Business Link”, “nosotros”), se considera que usted acepta los términos siguientes. Si no los acepta, le rogamos que no utilice el Sitio.",
  "Visitando e utilizzando questo sito web (businesslinkgroup.com, il “Sito”), gestito da Business Link LLC (“Business Link”, “noi”), si considera che Lei abbia accettato i termini seguenti. Se non li accetta, La preghiamo di non utilizzare il Sito.",
);

export const termsSections: LegalSection[] = [
  {
    title: loc(
      "Intellectual and Industrial Property Rights",
      "Derechos de propiedad intelectual e industrial",
      "Diritti di proprietà intellettuale e industriale",
    ),
    body: [
      loc(
        "The intellectual property rights in the visual designs, the Business Link name and logo, texts, layout, software and other original materials on this Site belong to Business Link LLC or are used under license. They may not be copied, reproduced, distributed or used for commercial purposes without our prior written permission.",
        "Los derechos de propiedad intelectual sobre los diseños visuales, el nombre y el logotipo de Business Link, los textos, la maquetación, el software y demás materiales originales de este Sitio pertenecen a Business Link LLC o se usan bajo licencia. No pueden copiarse, reproducirse, distribuirse ni usarse con fines comerciales sin nuestro permiso previo por escrito.",
        "I diritti di proprietà intellettuale su design visivi, nome e logo Business Link, testi, layout, software e altri materiali originali di questo Sito appartengono a Business Link LLC o sono usati su licenza. Non possono essere copiati, riprodotti, distribuiti o usati a fini commerciali senza il nostro previo consenso scritto.",
      ),
      loc(
        "Third-party brand names, logos, seals, product photographs and catalogues shown on the Site belong to their respective owners and are displayed to identify the products we distribute.",
        "Los nombres de marca, logotipos, sellos, fotografías de producto y catálogos de terceros que aparecen en el Sitio pertenecen a sus respectivos titulares y se muestran para identificar los productos que distribuimos.",
        "Nomi di marchi, loghi, sigilli, fotografie di prodotto e cataloghi di terzi presenti sul Sito appartengono ai rispettivi titolari e sono mostrati per identificare i prodotti che distribuiamo.",
      ),
    ],
  },
  {
    title: loc("Principles of Site Use", "Principios de uso del Sitio", "Principi di utilizzo del Sito"),
    body: [
      loc(
        "Users must comply with the law and applicable regulations when using the Site. Any attempt to threaten the security of the Site, impair the operation of the Site or its servers, gain unauthorized access, or extract its content by automated means is prohibited. The contact form may not be used to send spam, unlawful content or false information.",
        "Los usuarios deben cumplir la ley y la normativa aplicable al usar el Sitio. Se prohíbe cualquier intento de amenazar la seguridad del Sitio, perjudicar el funcionamiento del Sitio o de sus servidores, obtener acceso no autorizado o extraer su contenido por medios automatizados. El formulario de contacto no puede usarse para enviar spam, contenido ilícito ni información falsa.",
        "Gli utenti devono rispettare la legge e le norme applicabili nell’uso del Sito. È vietato qualsiasi tentativo di minacciare la sicurezza del Sito, comprometterne il funzionamento o quello dei suoi server, ottenere accessi non autorizzati o estrarne i contenuti con mezzi automatizzati. Il modulo di contatto non può essere usato per inviare spam, contenuti illeciti o informazioni false.",
      ),
    ],
  },
  {
    title: loc(
      "Accuracy of Information and Limitation of Liability",
      "Exactitud de la información y limitación de responsabilidad",
      "Accuratezza delle informazioni e limitazione di responsabilità",
    ),
    body: [
      loc(
        "Business Link makes every effort to keep the information on the Site accurate and up to date. However, product availability, specifications, packaging, certifications and export eligibility depend on the destination market, regulations and manufacturer terms, and may change without notice. The Site is provided “as is,” without warranties of any kind, to the fullest extent permitted by law.",
        "Business Link hace todo lo posible para que la información del Sitio sea exacta y esté actualizada. Sin embargo, la disponibilidad, especificaciones, empaques, certificaciones y elegibilidad de exportación de los productos dependen del mercado de destino, la normativa y los términos del fabricante, y pueden cambiar sin aviso. El Sitio se ofrece “tal cual”, sin garantías de ningún tipo, en la máxima medida permitida por la ley.",
        "Business Link si impegna a mantenere le informazioni del Sito accurate e aggiornate. Tuttavia, disponibilità, specifiche, confezioni, certificazioni ed esportabilità dei prodotti dipendono dal mercato di destinazione, dalle norme e dai termini del produttore, e possono cambiare senza preavviso. Il Sito è fornito “così com’è”, senza garanzie di alcun tipo, nella misura massima consentita dalla legge.",
      ),
      loc(
        "Business Link cannot be held liable for any direct or indirect damage arising from typographical errors, technical faults, interruptions or delays in updating the Site, or from decisions made in reliance on its content.",
        "Business Link no será responsable de ningún daño directo o indirecto derivado de errores tipográficos, fallos técnicos, interrupciones o retrasos en la actualización del Sitio, ni de decisiones tomadas con base en su contenido.",
        "Business Link non può essere ritenuta responsabile per danni diretti o indiretti derivanti da errori tipografici, guasti tecnici, interruzioni o ritardi nell’aggiornamento del Sito, né da decisioni prese sulla base dei suoi contenuti.",
      ),
    ],
  },
  {
    title: loc("No Offer; Inquiries", "Sin oferta; consultas", "Nessuna offerta; richieste"),
    body: [
      loc(
        "Nothing on the Site is a binding offer, quotation or contract. Submitting the contact form does not create a supply or distribution agreement; any sale is governed solely by a separate written agreement. We evaluate opportunities and respond at our discretion.",
        "Nada en el Sitio constituye una oferta vinculante, cotización o contrato. Enviar el formulario de contacto no crea un acuerdo de suministro o distribución; cualquier venta se rige únicamente por un acuerdo escrito independiente. Evaluamos las oportunidades y respondemos a nuestra discreción.",
        "Nulla sul Sito costituisce un’offerta vincolante, un preventivo o un contratto. L’invio del modulo di contatto non crea un accordo di fornitura o distribuzione; ogni vendita è regolata esclusivamente da un accordo scritto separato. Valutiamo le opportunità e rispondiamo a nostra discrezione.",
      ),
    ],
  },
  {
    title: loc("Brands We Represent", "Marcas que representamos", "Marchi che rappresentiamo"),
    body: [
      loc(
        "Where the Site describes manufacturers we represent, statements about their products, programs or certifications refer to those manufacturers (for example, AmeriQual Foods). Business Link commercially distributes and exports those products as master distributor; we are not the U.S. Government and do not claim government endorsement.",
        "Cuando el Sitio describe fabricantes que representamos, las afirmaciones sobre sus productos, programas o certificaciones se refieren a esos fabricantes (por ejemplo, AmeriQual Foods). Business Link distribuye y exporta esos productos comercialmente como distribuidor maestro; no somos el Gobierno de EE. UU. ni reclamamos su respaldo.",
        "Quando il Sito descrive i produttori che rappresentiamo, le affermazioni su prodotti, programmi o certificazioni si riferiscono a quei produttori (ad esempio AmeriQual Foods). Business Link distribuisce ed esporta commercialmente tali prodotti come distributore master; non siamo il Governo degli Stati Uniti e non rivendichiamo alcuna approvazione governativa.",
      ),
    ],
  },
  {
    title: loc(
      "External Links (Third-Party Links)",
      "Enlaces externos (enlaces de terceros)",
      "Link esterni (link di terzi)",
    ),
    body: [
      loc(
        "The Site may contain links to third-party websites, such as manufacturer sites. Business Link is not responsible for the content, privacy policies or security practices of these external sites.",
        "El Sitio puede contener enlaces a sitios web de terceros, como los de los fabricantes. Business Link no es responsable del contenido, las políticas de privacidad ni las prácticas de seguridad de esos sitios externos.",
        "Il Sito può contenere link a siti web di terzi, come quelli dei produttori. Business Link non è responsabile dei contenuti, delle informative sulla privacy o delle pratiche di sicurezza di tali siti esterni.",
      ),
    ],
  },
  {
    title: loc("Privacy", "Privacidad", "Privacy"),
    body: [
      loc(
        "Information you send us through the Site is handled as described in our Privacy Policy.",
        "La información que nos envía a través del Sitio se trata según lo descrito en nuestra Política de Privacidad.",
        "Le informazioni che ci invia tramite il Sito sono trattate come descritto nella nostra Informativa sulla privacy.",
      ),
    ],
  },
  {
    title: loc("Right to Make Changes", "Derecho a realizar cambios", "Diritto di apportare modifiche"),
    body: [
      loc(
        "Business Link reserves the right to change, update or withdraw these terms of use and the content and services offered on the Site at any time, without prior notice. Continued use of the Site after a change means you accept the updated terms.",
        "Business Link se reserva el derecho de modificar, actualizar o retirar estos términos de uso y el contenido y los servicios ofrecidos en el Sitio en cualquier momento, sin previo aviso. El uso continuado del Sitio tras un cambio implica la aceptación de los términos actualizados.",
        "Business Link si riserva il diritto di modificare, aggiornare o ritirare i presenti termini di utilizzo e i contenuti e servizi offerti sul Sito in qualsiasi momento, senza preavviso. L’uso continuato del Sito dopo una modifica comporta l’accettazione dei termini aggiornati.",
      ),
    ],
  },
  {
    title: loc(
      "Governing Law and Competent Courts",
      "Ley aplicable y tribunales competentes",
      "Legge applicabile e foro competente",
    ),
    body: [
      loc(
        "These terms are governed by the laws of the State of Florida, USA, without regard to conflict-of-law rules, unless mandatory local law provides otherwise. The state and federal courts located in Florida shall have jurisdiction over any dispute arising from these terms of use.",
        "Estos términos se rigen por las leyes del Estado de Florida, EE. UU., sin perjuicio de las normas de conflicto de leyes, salvo que la ley local imperativa disponga otra cosa. Los tribunales estatales y federales con sede en Florida serán competentes para cualquier controversia derivada de estos términos de uso.",
        "I presenti termini sono regolati dalle leggi dello Stato della Florida, USA, fatte salve le norme sui conflitti di legge, salvo diversa disposizione di legge locale imperativa. I tribunali statali e federali con sede in Florida saranno competenti per qualsiasi controversia derivante dai presenti termini di utilizzo.",
      ),
    ],
  },
  {
    title: loc("Contact", "Contacto", "Contatti"),
    body: [
      loc(
        "Questions about these terms: info@businesslinkgroup.com.",
        "Preguntas sobre estos términos: info@businesslinkgroup.com.",
        "Domande su questi termini: info@businesslinkgroup.com.",
      ),
    ],
  },
];
