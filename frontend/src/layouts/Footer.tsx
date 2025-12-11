import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer(): JSX.Element {
  const { footer } = useThemeConfig();
  const { copyright, links } = footer || {};

  if (!footer) {
    return null;
  }

  return (
    <FooterLayout
      links={links && links.length > 0 && <FooterLinks links={links} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default Footer;