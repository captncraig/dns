var Namecheap = NewRegistrar('namecheap', 'NAMECHEAP');
var CF = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI')

function mailgunMX(domainKey) {
    return [
        MX("@", 10, 'mxa.mailgun.org.'),
        MX("@", 10, 'mxb.mailgun.org.'),
        TXT("@", "v=spf1 include:mailgun.org ~all"),
        TXT("smtp._domainkey",domainKey),
        CNAME("email", "mailgun.org.")
    ]
}

D("captncraig.io", Namecheap, DnsProvider(CF)
    , mailgunMX("k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYsz5TsAJO/3h0FsSP3VNQCMp+IZUJAXQyN5B/GChDifZJj6I65TfHaafvfLQszXovMZ23yllPX5+z8phCS0ifx/MrXXyJ5/m5+i9yxwVEvmTR/SZERAeN6UcWunivRPzwl/O5hDPTmGIHpksCJY4bcPU4rAHfa1IONRtPd/E0YwIDAQAB")
    , TXT("@", "keybase-site-verification=BZ97WzmtXCVIf9WESiJWVcZgw4fUs98MsTR-a278HjA")
    , A("do","138.197.226.219")
    , AAAA("do","2604:a880:400:d0::3f80:d001")
    , CNAME("test","google2.com.")
)

D("craigosaur.us", Namecheap, DnsProvider(CF)
    , mailgunMX("k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDiOjuizEPfO59/Hch7N4U0RWDNE+l8JIiCZUrbuBYw6rmRNJE2aMklVtBo9L0ke+qD0S7WehScS3CgKCWDF7KNUoKuCyiJDGSwtXRf8OHQcpAJsJ/zmiAYaEvQdCdRtFSb6VyPFTC18yvDbDVVlxEtav8Dq4S4zGSr9judQkPMWwIDAQAB")
)