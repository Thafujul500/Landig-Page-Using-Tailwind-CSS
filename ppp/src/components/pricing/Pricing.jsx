import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "19.00",
      features: [
        "5000 User Activities",
        "Unlimited Access",
        "No Hidden Charge",
        "03 Time Updates",
        "Figma Source File",
        "Many More facilities",
      ],
      buttonLabel: "Purchase",
    },
    {
      title: "Standard Plan",
      price: "39.00",
      features: [
        "10000 User Activities",
        "Unlimited Access",
        "Priority Support",
        "05 Time Updates",
        "Figma + Sketch Source File",
        "Many More facilities",
      ],
      buttonLabel: "Purchase",
    },
    {
      title: "Premium Plan",
      price: "59.00",
      features: [
        "Unlimited User Activities",
        "Unlimited Access",
        "Premium Support",
        "Unlimited Updates",
        "All Source Files",
        "Many More facilities",
      ],
      buttonLabel: "Purchase",
    },
  ];
  return (
    <div className="container mx-auto bg-slate-900 mt-10 pt-5 px-5">
      <div className="text-white grid gap-10 sm:gap-16 md:gap-20 justify-center items-center md:grid-cols-2 lg:grid-cols-3 mt-10 pb-10">
        {plans.map((plan, index) => (
          <div className="border p-10 rounded-md" key={index}>
            <h5>{plan.title}</h5>
            <h2>
              ${" "}
              <span className="text-xl sm:text-2xl md:text-5xl font-bold">
                {plan.price}
              </span>
              /month
            </h2>
            <hr className="my-5" />
            <ul className="list-disc leading-10 text-xl list-inside">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="text-center text-xl bg-green-900 px-5 py-2 mt-5 rounded-md hover:bg-green-600 transition">
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
