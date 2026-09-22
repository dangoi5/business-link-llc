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
        "Business Link LLC (“Business Link,” “we,” “us”) is a master distributor and exporter of food and beverage products. This Privacy Policy explains how we handle information when you use businesslinkgroup.com and related pages (the “Site”).",
        "Business Link LLC (“Business Link”, “nosotros”) es un distribuidor maestro y exportador de alimentos y bebidas. Esta Política de Privacidad explica cómo tratamos la información cuando usa businesslinkgroup.com y páginas relacionadas (el “Sitio”).",
        "Business Link LLC (“Business Link”, “noi”) è un distributore master ed esportatore di prodotti alimentari e bevande. La presente Informativa sulla privacy spiega come trattiamo le informazioni quando utilizza businesslinkgroup.com e le pagine correlate (il “Sito”).",
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

export const termsSections: LegalSection[] = [
  {
    title: loc("About this site", "Sobre este sitio", "Informazioni sul sito"),
    body: [
      loc(
        "This Site is operated by Business Link LLC to present our role as a master distributor and exporter of food and beverage products, including brands we represent (such as AmeriQual Foods) and our own Fresh Elements line. Content is for general business information.",
        "Este Sitio es operado por Business Link LLC para presentar nuestro rol como distribuidor maestro y exportador de alimentos y bebidas, incluidas marcas que representamos (como AmeriQual Foods) y nuestra línea Fresh Elements. El contenido es información comercial general.",
        "Questo Sito è gestito da Business Link LLC per presentare il nostro ruolo di distributore master ed esportatore di prodotti alimentari e bevande, inclusi i marchi che rappresentiamo (come AmeriQual Foods) e la nostra linea Fresh Elements. I contenuti sono informazioni commerciali generali.",
      ),
    ],
  },
  {
    title: loc("No offer or warranty", "Sin oferta ni garantía", "Nessuna offerta o garanzia"),
    body: [
      loc(
        "Nothing on the Site is a binding offer, quotation or contract. Product availability, specifications, certifications and export eligibility depend on destination, regulations and manufacturer terms. Information may change without notice. The Site is provided “as is” without warranties of any kind to the fullest extent permitted by law.",
        "Nada en el Sitio constituye una oferta vinculante, cotización o contrato. La disponibilidad, especificaciones, certificaciones y elegibilidad de exportación dependen del destino, la normativa y los términos del fabricante. La información puede cambiar sin aviso. El Sitio se ofrece “tal cual”, sin garantías de ningún tipo en la máxima medida permitida por la ley.",
        "Nulla sul Sito costituisce un’offerta vincolante, un preventivo o un contratto. Disponibilità, specifiche, certificazioni ed esportabilità dipendono dalla destinazione, dalle norme e dai termini del produttore. Le informazioni possono cambiare senza preavviso. Il Sito è fornito “così com’è”, senza garanzie di alcun tipo nella misura massima consentita dalla legge.",
      ),
    ],
  },
  {
    title: loc("Brand representation", "Representación de marcas", "Rappresentanza di marchi"),
    body: [
      loc(
        "Where we describe manufacturers we represent, statements about their products, programs or certifications refer to those manufacturers (for example, AmeriQual Foods). Business Link commercially distributes and exports those products as master distributor; we are not the U.S. Government and do not claim government endorsement.",
        "Cuando describimos fabricantes que representamos, las afirmaciones sobre sus productos, programas o certificaciones se refieren a esos fabricantes (por ejemplo, AmeriQual Foods). Business Link distribuye y exporta esos productos comercialmente como distribuidor maestro; no somos el Gobierno de EE. UU. ni reclamamos su respaldo.",
        "Quando descriviamo i produttori che rappresentiamo, le affermazioni su prodotti, programmi o certificazioni si riferiscono a quei produttori (ad esempio AmeriQual Foods). Business Link distribuisce ed esporta commercialmente tali prodotti come distributore master; non siamo il Governo degli Stati Uniti e non rivendichiamo alcuna approvazione governativa.",
      ),
    ],
  },
  {
    title: loc("Inquiries", "Consultas", "Richieste"),
    body: [
      loc(
        "Submitting the contact form does not create a supply agreement. We evaluate opportunities and respond at our discretion.",
        "Enviar el formulario de contacto no crea un acuerdo de suministro. Evaluamos oportunidades y respondemos a nuestra discreción.",
        "L’invio del modulo di contatto non crea un accordo di fornitura. Valutiamo le opportunità e rispondiamo a nostra discrezione.",
      ),
    ],
  },
  {
    title: loc("Intellectual property", "Propiedad intelectual", "Proprietà intellettuale"),
    body: [
      loc(
        "Site text, layout and Business Link branding are owned by Business Link LLC or used under license. Third-party logos, seals and product marks belong to their respective owners.",
        "El texto, el diseño y la marca Business Link del Sitio son propiedad de Business Link LLC o se usan bajo licencia. Los logos, sellos y marcas de producto de terceros pertenecen a sus respectivos titulares.",
        "Testi, layout e marchio Business Link del Sito appartengono a Business Link LLC o sono usati su licenza. Loghi, sigilli e marchi di prodotto di terzi appartengono ai rispettivi titolari.",
      ),
    ],
  },
  {
    title: loc("Governing law", "Ley aplicable", "Legge applicabile"),
    body: [
      loc(
        "These terms are governed by the laws of the State of Florida, USA, without regard to conflict-of-law rules, unless mandatory local law provides otherwise.",
        "Estos términos se rigen por las leyes del Estado de Florida, EE. UU., sin perjuicio de normas de conflicto de leyes, salvo que la ley local imperativa disponga otra cosa.",
        "I presenti termini sono regolati dalle leggi dello Stato della Florida, USA, fatte salve le norme sui conflitti di legge, salvo diversa disposizione di legge locale imperativa.",
      ),
    ],
  },
];
