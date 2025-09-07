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

          {/* Overview Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="h-4 bg-slate-800 rounded animate-pulse mb-2 w-2/3"></div>
                    <div className="h-6 bg-slate-700 rounded animate-pulse mb-2 w-1/2"></div>
                    <div className="h-3 bg-slate-800 rounded animate-pulse w-1/3"></div>
                  </div>
                  <div className="w-12 h-12 bg-slate-800 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders Skeleton */}
            <div className="lg:col-span-2 bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
              <div className="h-6 bg-slate-700 rounded animate-pulse mb-4 w-1/3"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="h-4 bg-slate-700 rounded animate-pulse mb-2 w-1/3"></div>
                        <div className="h-3 bg-slate-800 rounded animate-pulse mb-1 w-1/2"></div>
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-1/4"></div>
                      </div>
                      <div className="h-4 bg-slate-700 rounded animate-pulse w-16"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Skeleton */}
            <div className="space-y-6">
              <div className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
                <div className="h-5 bg-slate-700 rounded animate-pulse mb-4 w-1/2"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="h-3 bg-slate-800 rounded animate-pulse w-1/3"></div>
                      <div className="h-3 bg-slate-700 rounded animate-pulse w-1/4"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
                <div className="h-5 bg-slate-700 rounded animate-pulse mb-4 w-1/2"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-full animate-pulse mx-auto mb-3"></div>
                  <div className="h-4 bg-slate-700 rounded animate-pulse mb-1 w-1/2 mx-auto"></div>
                  <div className="h-3 bg-slate-800 rounded animate-pulse w-1/3 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
