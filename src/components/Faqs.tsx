import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How long does EZ-List take?',
      answer:
        'Our standard turnaround time is ten business days although we do our best to complete the service in fewer days.',
    },
    {
      question: 'Why do I need to pay first?',
      answer:
        "Identification is a very labor intensive process and upfront payment is required to ensure effort and time isn't wasted.",
    },
    {
      question: 'How do I apply for a job at EZ-List?',
      answer:
        'We are on the lookout for talented card enthusiasts that want to work as identifiers. Please reach out to us to learn more.',
    },
  ],
  [
    {
      question: 'Why are prices occasionally left blank?',
      answer:
        "Our pricing algorith is based on pricing below the going rate for each individual card. If the pricing software can't find identical cards to price against, or if the pricing software isn't confident enough in a match to price, it will leave the price blank.",
    },
    {
      question: 'What do I do if the price column is left blank?',
      answer:
        'Our pricing software also includes a link to a) an eBay search for the card sorted by lowest price and b) a link to completed sold listings for that card. We provide these to help with pricing research in situations where the pricing software is unable to find a match.',
    },
    {
      question: 'How do I take pictures of my cards?',
      answer:
        'Pictures can be taken with a phone or camera but we reccomend investing in a scanner if you intend to upload a large quantity of cards. ',
    },
  ],
  [
    {
      question: 'Does it matter how my pictures look?',
      answer:
        'The pictures you send us will be the same pictures used in your card listing on eBay. Care should be taken to present your cards in the best quality possible.',
    },

    {
      question: 'Is EZ-List identification or pricing ever wrong?',
      answer:
        'We are proud of the service we provide and strive to make all listings error free and our error rate has been very low. Unfortunately, errors can occur, and we reccommend customers spot check returned CSV files for any potential errors.',
    },
    {
      question: "Are there any cards I can't send through EZ-List?",
      answer:
        "As long as the cards value is 20 dollars or less the EZ-List service can most likely be used. We work with all types of sports cards, Marvel cards, Star Wars cards, etc. If you're concerned that we may not be able to identify your cards please reach out.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and we will get back to you as quickly as we can.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
