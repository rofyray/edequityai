import { ClayCard } from '@/components/clay'

export default function ConsentPendingPage() {
  return (
    <ClayCard>
      <div className="text-center py-4">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="font-sans text-xl font-bold mb-3">Almost there!</h2>
        <p className="font-serif text-muted-foreground">
          We&apos;ve sent an email to your parent or guardian asking for permission
          to create your account.
        </p>
        <p className="font-serif text-muted-foreground mt-3">
          Once they approve, you&apos;ll be able to sign in and start learning with NAANO.
        </p>
      </div>
    </ClayCard>
  )
}
