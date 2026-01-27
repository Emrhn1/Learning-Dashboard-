import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Korunan rotalar - bu sayfalara erişmek için giriş gerekli
const isProtectedRoute = createRouteMatcher([
    '/',           // Ana sayfa
    '/topics(.*)', // Topics ve alt sayfaları
    '/reflection(.*)',
    '/stucknotes(.*)',
    '/solutions(.*)',
])

// Public rotalar - giriş gerektirmeyen sayfalar
const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
])

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Next.js internals ve statik dosyaları atla
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // API rotalarını her zaman çalıştır
        '/(api|trpc)(.*)',
    ],
}