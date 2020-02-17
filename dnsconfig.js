
var namecheap = NewRegistrar('namecheap', 'NONE');
var cloudflare = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI')

function mailgunMX(domainKey, prefix) {
    if(!prefix){
      prefix = "smtp";   
    }
    return [
        MX("@", 10, 'mxa.mailgun.org.'),
        MX("@", 10, 'mxb.mailgun.org.'),
        TXT("@", "v=spf1 include:mailgun.org ~all"),
        TXT(prefix+"._domainkey",domainKey),
        CNAME("email", "mailgun.org.")
    ]
}

function ghPages(name, cfp){
     cfp = cfp || "off";
     return [
         A(name, "192.30.252.153",{ 'cloudflare_proxy': cfp }),
         A(name, "192.30.252.154",{ 'cloudflare_proxy': cfp })
     ]
}



D("craigosaur.us", namecheap, DnsProvider(cloudflare)
    , mailgunMX("k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDiOjuizEPfO59/Hch7N4U0RWDNE+l8JIiCZUrbuBYw6rmRNJE2aMklVtBo9L0ke+qD0S7WehScS3CgKCWDF7KNUoKuCyiJDGSwtXRf8OHQcpAJsJ/zmiAYaEvQdCdRtFSb6VyPFTC18yvDbDVVlxEtav8Dq4S4zGSr9judQkPMWwIDAQAB","k1")
)

D("wwwdotcom.dev", namecheap, DnsProvider(cloudflare),
    mailgunMX("k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwFSjzTMVGw/eCxLSr5g7eDiVU8JyNIzf0xn/iKgp3Vh8M7OlB3PX/fxzCCGQ7CZbC/nY+zrHUlj4tUTte4sLvbDYAd8oCSO3kt55872J1CU4XaaSY/5LHb4rYpHaFHalUjlSyp3YLFr42apARE5dM+aIkZyXyprXfotpydMRjBwIDAQAB", "mx")    
)

D("captncraig.io", namecheap,
        DnsProvider(cloudflare),
        CNAME('dashboard', 'captnzappo.duckdns.org.'),
        CNAME('email', 'mailgun.org.'),
        MX('@', 10, 'mxa.mailgun.org.'),
        MX('@', 10, 'mxb.mailgun.org.'),
        TXT('@', 'keybase-site-verification=BZ97WzmtXCVIf9WESiJWVcZgw4fUs98MsTR-a278HjA'),
        TXT('@', 'v=spf1 include:mailgun.org ~all'),
        TXT('smtp._domainkey', 'k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYsz5TsAJO/3h0FsSP3VNQCMp+IZUJAXQyN5B/GChDifZJj6I65TfHaafvfLQszXovMZ23yllPX5+z8phCS0ifx/MrXXyJ5/m5+i9yxwVEvmTR/SZERAeN6UcWunivRPzwl/O5hDPTmGIHpksCJY4bcPU4rAHfa1IONRtPd/E0YwIDAQAB')
)