import React from 'react'

const FaqTeaser = () => {
    return (

        <section className=" py-12 px-6 md:px-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs — You Ask, We Answer</h2>
            <ul className="text-gray-700 space-y-3">
                <li><strong>Can I get edits later?</strong><br />Only higher tiers allow edits. Our basic tier does not include revisions.</li>
                <li><strong>How fast is delivery?</strong><br />Our standard turnaround is 7 hours for the first tier and quicker for premium tiers.</li>
                <li><strong>How do I send my info?</strong><br />You’ll get a simple form or you can WhatsApp your details directly!</li>
            </ul>
            <div className="mt-6">
                <a href="/faq" className="text-blue-600 font-semibold hover:underline">
                    View All FAQs →
                </a>
            </div>
        </section>

    )
}

export default FaqTeaser

