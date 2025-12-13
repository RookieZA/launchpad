# Security Policy

## Supported Versions

This project is actively maintained. Please always use the latest version for the most up-to-date security patches.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by creating a private security advisory on GitHub or by contacting the maintainers directly.

## Security Updates

### December 2025 - React2Shell Vulnerability Fix

**Vulnerability:** React2Shell / XSS via dangerouslySetInnerHTML
- **Severity:** High
- **Component:** Website (`/website/src/components/BlogPost.tsx`)
- **Description:** The application was using `dangerouslySetInnerHTML` without proper HTML sanitization, which could allow malicious content in markdown files to execute arbitrary JavaScript (XSS attack).

**Fix Applied:**
1. **Added HTML Sanitization**: Installed `isomorphic-dompurify` (v2.34.0) to sanitize all HTML content before rendering
2. **Updated BlogPost Component**: Modified `BlogPost.tsx` to use `DOMPurify.sanitize()` before passing content to `dangerouslySetInnerHTML`
3. **Proper Markdown Processing**: Added markdown-to-HTML conversion utilities using `remark` and `remark-html`
4. **Dependency Updates**: Fixed critical npm audit vulnerabilities including:
   - Next.js RCE vulnerability (updated to v15.5.9)
   - mdast-util-to-hast unsanitized class attribute
   - js-yaml prototype pollution
   - glob CLI command injection

**Impact:**
- Prevents XSS attacks through user-controlled markdown content
- Ensures all HTML content is properly sanitized before rendering
- Compatible with Next.js SSR (using isomorphic-dompurify)

**Verification:**
- Build passes successfully
- CodeQL security scan: 0 alerts
- npm audit: 0 vulnerabilities

## Best Practices

When contributing to this project:

1. **Never use `dangerouslySetInnerHTML` without sanitization** - Always sanitize HTML content using DOMPurify
2. **Keep dependencies updated** - Run `npm audit` regularly and fix vulnerabilities
3. **Validate user input** - Always validate and sanitize any user-provided content
4. **Use Content Security Policy** - Consider implementing CSP headers for additional XSS protection
5. **Regular security audits** - Run CodeQL and other security scanners on code changes

## Security Tools Used

- **npm audit** - Dependency vulnerability scanning
- **CodeQL** - Static code analysis for security vulnerabilities
- **ESLint** - Code quality and security linting
- **DOMPurify** - HTML sanitization library

## Additional Resources

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetsecurity.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [React Security Best Practices](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
