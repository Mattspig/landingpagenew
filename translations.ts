
export type TranslationType = {
  nav: {
    howItWorks: string;
    about: string;
    contact: string;
    lang: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustLine: string;
  };
  who: {
    headline: string;
    bullets: string[];
    footer: string;
  };
  problems: {
    headline: string;
    items: string[];
    subtext: string;
    metricLine: string;
  };
  how: {
    headline: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    footer: string;
  };
  strategy: {
    headline: string;
    paragraph: string;
    bullets: string[];
  };
  about: {
    headline: string;
    text1: string;
    text2: string;
    mission: string;
  };
  contact: {
    headline: string;
    left: {
      text: string;
      bullets: string[];
      button: string;
    };
    form: {
      name: string;
      company: string;
      email: string;
      enquiry: string;
      volume: string;
      submit: string;
    };
  };
};

export const translations: Record<'en' | 'fr', TranslationType> = {
  en: {
    nav: {
      howItWorks: "How it works",
      about: "About",
      contact: "Contact",
      lang: "FR",
    },
    hero: {
      headline: "Turn every enquiry into revenue, automatically.",
      subheadline: "We capture and qualify your incoming enquiries, reply in minutes, and free your team from manual follow‑ups.",
      primaryCTA: "Book a 30-minute discovery call",
      secondaryCTA: "Contact us",
      trustLine: "Built for busy teams drowning in emails, leads and follow-ups.",
    },
    who: {
      headline: "Who Flowify helps",
      bullets: [
        "You get leads from forms, email or portals.",
        "Your team spends too long replying, qualifying and scheduling.",
        "You want more revenue without hiring more people."
      ],
      footer: "Works great for real estate, agencies, recruitment, and more.",
    },
    problems: {
      headline: "The problems Flowify eliminates",
      items: [
        "New enquiries wait hours (or days) for a reply",
        "Senior staff waste time triaging emails instead of closing deals",
        "No one can see, in one place, what's happening with every lead"
      ],
      subtext: "Flowify fixes this quietly in the background while your team works as usual.",
      metricLine: "Even fixing one of these can recover dozens of hours per month for a small team.",
    },
    how: {
      headline: "How Flowify works",
      step1: {
        title: "We map your revenue leaks",
        desc: "In a short discovery call, we unpack how enquiries arrive today and where time is wasted."
      },
      step2: {
        title: "We activate your Opportunity Capture System",
        desc: "Flowify centralizes incoming enquiries, classifies them and routes them to the right person instantly."
      },
      step3: {
        title: "We add a Smart Follow-Up Assistant",
        desc: "Your prospects receive fast, tailored replies and suggested next steps, without your team typing every email."
      },
      footer: "Everything shows up in a simple dashboard so you know what's happening at any moment.",
    },
    strategy: {
      headline: "Revenue Improvement Strategy",
      paragraph: "Flowify runs in the background on top of your existing tools. It's a done-for-you Revenue Improvement Strategy: a set of automated workflows tailored to your business that capture more opportunities, reply faster, and free your team to focus on meaningful work.",
      bullets: [
        "Centralized enquiries instead of scattered inboxes",
        "Prioritized opportunities instead of guesswork",
        "Consistent follow-up instead of forgotten messages"
      ],
    },
    about: {
      headline: "About Flowify",
      text1: "Flowify was founded by Matthieu Spigarelli who spent a decade in sales and operations and saw the same pattern everywhere: teams buried in manual follow-up and coordination. Today, the focus is on building automated workflows that quietly improve how businesses run day to day.",
      text2: "First results are being rolled out with local service businesses in Luxembourg. Early work focuses on faster responses and fewer missed opportunities.",
      mission: "The goal: give small teams the kind of automation only big companies used to have.",
    },
    contact: {
      headline: "Let's see if Flowify fits your business",
      left: {
        text: "In a 30-minute call, we'll map your current enquiry flow, highlight where you're losing time and revenue, and outline what Flowify would automate first. No slides, no fluff.",
        bullets: [
          "Understand whether automation makes sense for you",
          "Rough estimate of hours you could save every week",
          "Clear next step if you want to move forward"
        ],
        button: "Book your 30-minute call now",
      },
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        enquiry: "How do enquiries currently reach you?",
        volume: "How many enquiries do you get per week?",
        submit: "Send Message",
      },
    },
  },
  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      about: "À propos",
      contact: "Contact",
      lang: "EN",
    },
    hero: {
      headline: "Transformez chaque demande en revenu, automatiquement",
      subheadline: "Nous capturons et qualifions vos demandes entrantes, répondons en quelques minutes et libérons votre équipe des suivis manuels.",
      primaryCTA: "Réserver un appel de découverte de 30 minutes",
      secondaryCTA: "Contactez-nous",
      trustLine: "Conçu pour les équipes débordées par les e-mails et les suivis.",
    },
    who: {
      headline: "Qui Flowify aide",
      bullets: [
        "Vous recevez des prospects via formulaires, e-mails ou portails.",
        "Votre équipe passe trop de temps à répondre, qualifier et planifier.",
        "Vous voulez plus de revenus sans recruter davantage."
      ],
      footer: "Idéal pour l'immobilier, les agences, le recrutement, et plus.",
    },
    problems: {
      headline: "Les problèmes que Flowify élimine",
      items: [
        "Les nouvelles demandes attendent des heures (ou jours) une réponse",
        "Le personnel senior perd du temps à trier au lieu de vendre",
        "Manque de visibilité centralisée sur l'état de chaque lead"
      ],
      subtext: "Flowify règle cela discrètement en arrière-plan pendant que vous travaillez.",
      metricLine: "Corriger un seul de ces points peut libérer des dizaines d'heures par mois pour une petite équipe.",
    },
    how: {
      headline: "Comment Flowify fonctionne",
      step1: {
        title: "Nous cartographions vos fuites de revenus",
        desc: "Lors d'un court appel, nous analysons l'arrivée de vos demandes et les pertes de temps."
      },
      step2: {
        title: "Nous activons votre Système de capture d'opportunités",
        desc: "Flowify centralise les demandes, les classifie et les oriente instantanément vers la bonne personne."
      },
      step3: {
        title: "Nous ajoutons un Assistant de suivi intelligent",
        desc: "Vos prospects reçoivent des réponses rapides et personnalisées sans saisie manuelle."
      },
      footer: "Tout apparaît dans un tableau de bord simple pour un suivi en temps réel.",
    },
    strategy: {
      headline: "Stratégie d'amélioration des revenus",
      paragraph: "Flowify fonctionne en arrière-plan au-dessus de vos outils existants. C'est une stratégie d'amélioration des revenus clé en main : des workflows automatisés sur mesure qui captent plus d'opportunités et libèrent votre équipe.",
      bullets: [
        "Demandes centralisées au lieu de boîtes mails dispersées",
        "Opportunités prioritaires au lieu de suppositions",
        "Suivi constant au lieu de messages oubliés"
      ],
    },
    about: {
      headline: "À propos de Flowify",
      text1: "Flowify a été fondé par Matthieu Spigarelli qui a passé une décennie dans la vente et les opérations et a vu le même schéma partout : des équipes noyées dans le suivi et la coordination manuels. Aujourd'hui, l'accent est mis sur la création de workflows automatisés qui améliorent discrètement le fonctionnement quotidien des entreprises.",
      text2: "Les premiers résultats sont déployés auprès d'entreprises locales au Luxembourg. Les premiers travaux se concentrent sur des réponses plus rapides et une réduction des opportunités manquées.",
      mission: "L'objectif : offrir aux petites équipes le type d'automatisation dont seules les grandes entreprises disposaient auparavant.",
    },
    contact: {
      headline: "Voyons si Flowify convient à votre entreprise",
      left: {
        text: "En 30 minutes, nous cartographierons votre flux actuel et identifierons les automatisations prioritaires. Pas de slides, pas de blabla.",
        bullets: [
          "Comprendre si l'automatisation est pertinente pour vous",
          "Estimation du temps que vous pourriez gagner chaque semaine",
          "Étapes claires pour avancer si vous le souhaitez"
        ],
        button: "Réserver votre appel de 30 minutes maintenant",
      },
      form: {
        name: "Nom",
        company: "Entreprise",
        email: "E-mail",
        enquiry: "Comment vos demandes arrivent-elles actuellement ?",
        volume: "Combien de demandes recevez-vous par semaine ?",
        submit: "Envoyer le message",
      },
    },
  }
};
