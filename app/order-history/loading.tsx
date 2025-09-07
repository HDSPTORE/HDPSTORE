import Navigation from "@/components/navigation"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="h-8 bg-slate-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-slate-800 rounded animate-pulse w-2/3"></div>
          </div>

          {/* Filters Skeleton */}
          <div className="mb-6 bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
            <div className="h-5 bg-slate-700 rounded animate-pulse mb-4 w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-slate-800 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Orders Table Skeleton */}
          <div className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
            <div className="h-6 bg-slate-700 rounded animate-pulse mb-4 w-1/4"></div>

            {/* Desktop Table Skeleton */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-7 gap-4 mb-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-4 bg-slate-800 rounded animate-pulse"></div>
                ))}
              </div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="grid grid-cols-7 gap-4 mb-3">
                  {[...Array(7)].map((_, j) => (
                    <div key={j} className="h-6 bg-slate-800 rounded animate-pulse"></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile Cards Skeleton */}
            <div className="lg:hidden space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 bg-slate-700 rounded animate-pulse w-1/3"></div>
                    <div className="h-6 bg-slate-700 rounded animate-pulse w-20"></div>
                  </div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="h-3 bg-slate-800 rounded animate-pulse w-2/3"></div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-slate-800 rounded animate-pulse w-1/4"></div>
                      <div className="h-5 bg-slate-700 rounded animate-pulse w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
