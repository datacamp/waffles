import { useEffect } from 'react';
import { useAddTableOfContentsEntry } from 'context/table-of-contents-context';

import slugify from '../helpers/slugify';

export default function useContentsTable(isVisible: boolean, heading: string) {
  const addEntry = useAddTableOfContentsEntry();
  const headingId = slugify(heading);

  // TODO: There's definitely some future improvement to be had here for recognising the priority of which section should be active if two appear at the same time - ixTec

  useEffect(() => {
    if (headingId) {
      addEntry(({ activeSection, previousActiveSection, entries }) => {
        const newActiveSection = isVisible
          ? headingId
          : headingId === activeSection
          ? previousActiveSection
          : activeSection;
        const newPreviousSection = previousActiveSection
          ? newActiveSection !== headingId &&
            newActiveSection !== previousActiveSection
            ? newActiveSection
            : previousActiveSection
          : headingId;

        // Set new active section (if applicable) and update previous section. If entry already exists, don't add it
        return {
          activeSection: newActiveSection,
          previousActiveSection: newPreviousSection,
          entries: entries.includes(heading)
            ? entries
            : entries.concat(heading),
        };
      });
    }
  }, [addEntry, heading, headingId, isVisible]);
}
