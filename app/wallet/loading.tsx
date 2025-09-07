import Navigation from "@/components/navigation"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="h-8 bg-slate-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-slate-800 rounded animate-pulse w-2/3"></div>
          </div>

          {/* Wallet Balance Card Skeleton */}
          <div className="mb-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-6 bg-slate-700 rounded animate-pulse w-1/3"></div>
                </div>
                <div className="h-10 bg-slate-700 rounded animate-pulse mb-2 w-1/2"></div>
                <div className="h-4 bg-slate-800 rounded animate-pulse w-1/3"></div>
              </div>
              <div className="w-32 h-12 bg-slate-700 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Transaction History Skeleton */}
          <div className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
            <div className="h-6 bg-slate-700 rounded animate-pulse mb-4 w-1/3"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-8 h-8 bg-slate-700 rounded-lg animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-slate-700 rounded animate-pulse mb-2 w-1/3"></div>
                        <div className="h-3 bg-slate-800 rounded animate-pulse mb-1 w-2/3"></div>
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-1/4"></div>
                      </div>
                    </div>
                    <div className="h-5 bg-slate-700 rounded animate-pulse w-20"></div>
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
