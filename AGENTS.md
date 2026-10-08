<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep jewellery catalogue data and item-specific enquiry URLs in a shared browser-safe module so cards and details use identical names.
- Use a shared header and footer in the root layout and separate leaf pages for each site section so navigation and page metadata stay consistent.
- Consultation requests open WhatsApp with form details rather than pretending to store an appointment; no server persistence is required.
- Do not infer exact carat weights, gold purity or item certification from photographs; request confirmation for each piece.
