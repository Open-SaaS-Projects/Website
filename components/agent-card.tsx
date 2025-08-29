"use client";

interface AgentFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AgentCardProps {
  feature: AgentFeature;
  className?: string;
}

export function AgentCard({ feature, className = "" }: AgentCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1 ${className}`}
    >
      <div className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="[&>svg]:text-white">{feature.icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-gray-600 relative z-10 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

interface AgentCardsGridProps {
  features: AgentFeature[];
  className?: string;
}

export function AgentCardsGrid({
  features,
  className = "",
}: AgentCardsGridProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF]/5 to-[#311B92]/5 rounded-xl"></div>

      {/* Mobile/Tablet: Horizontal Scroll */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center"
              >
                <AgentCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none lg:hidden"></div>
      </div>

      {/* Large Screens: Grid Layout */}
      <div className="hidden lg:block p-6">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <AgentCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
