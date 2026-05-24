import { socialLinks } from "../../constants/socialLinks"

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">

      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <a
            key={social.name}
            aria-label={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-xl
              border border-border
              bg-(--color-surface)
              flex items-center justify-center
              text-muted
              hover:text-(--color-text)
              hover:border-(--color-primary)
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <Icon size={20} />
          </a>
        )
      })}

    </div>
  )
}

export default SocialLinks
